
'use strict';


define('forum/category/tools', [
	'topicSelect',
	'forum/topic/threadTools',
	'components',
	'api',
	'bootbox',
	'alerts',
], function (topicSelect, threadTools, components, api, bootbox, alerts) {
	const CategoryTools = {};

	CategoryTools.init = function () {
		topicSelect.init(updateDropdownOptions);
		handlePinnedTopicSort();

		$('[component="category/topic"]').each((index, el) => {
			threadTools.observeTopicLabels($(el).find('[component="topic/labels"]'));
		});

		components.get('topic/delete').on('click', function () {
			categoryCommand('del', '/state', 'delete', onDeleteRestoreComplete);
			return false;
		});

		components.get('topic/restore').on('click', function () {
			categoryCommand('put', '/state', 'restore', onDeleteRestoreComplete);
			return false;
		});

		components.get('topic/purge').on('click', function () {
			categoryCommand('del', '', 'purge', onPurgeComplete);
			return false;
		});

		components.get('topic/lock').on('click', function () {
			categoryCommand('put', '/lock', 'lock', onCommandComplete);
			return false;
		});

		components.get('topic/unlock').on('click', function () {
			categoryCommand('del', '/lock', 'unlock', onCommandComplete);
			return false;
		});

		components.get('topic/pin').on('click', function () {
			categoryCommand('put', '/pin', 'pin', onCommandComplete);
			return false;
		});

		components.get('topic/unpin').on('click', function () {
			categoryCommand('del', '/pin', 'unpin', onCommandComplete);
			return false;
		});

		components.get('topic/markImportant').on('click', function () {
			categoryCommand('put', '/markImportant', 'markImportant', onCommandComplete);
			return false;
		});

		components.get('topic/unmarkImportant').on('click', function () {
			categoryCommand('del', '/markImportant', 'unmarkImportant', onCommandComplete);
			return false;
		});

		// todo: should also use categoryCommand, but no write api call exists for this yet
		components.get('topic/mark-unread-for-all').on('click', function () {
			const tids = topicSelect.getSelectedTids();
			if (!tids.length) {
				return alerts.error('[[error:no-topics-selected]]');
			}
			socket.emit('topics.markAsUnreadForAll', tids, function (err) {
				if (err) {
					return alerts.error(err);
				}
				alerts.success('[[topic:markAsUnreadForAll.success]]');
				tids.forEach(function (tid) {
					$('[component="category/topic"][data-tid="' + tid + '"]').addClass('unread');
				});
				onCommandComplete();
			});
			return false;
		});

		components.get('topic/move').on('click', function () {
			require(['forum/topic/move'], function (move) {
				const tids = topicSelect.getSelectedTids();

				if (!tids.length) {
					return alerts.error('[[error:no-topics-selected]]');
				}
				move.init(tids, null, onCommandComplete);
			});

			return false;
		});

		components.get('topic/move-all').on('click', function () {
			const cid = ajaxify.data.cid;
			if (!ajaxify.data.template.category) {
				return alerts.error('[[error:invalid-data]]');
			}
			require(['forum/topic/move'], function (move) {
				move.init(null, cid, function (err) {
					if (err) {
						return alerts.error(err);
					}

					ajaxify.refresh();
				});
			});
		});

		components.get('topic/merge').on('click', function () {
			const tids = topicSelect.getSelectedTids();
			require(['forum/topic/merge'], function (merge) {
				merge.init(function () {
					if (tids.length) {
						tids.forEach(function (tid) {
							merge.addTopic(tid);
						});
					}
				});
			});
		});

		components.get('topic/tag').on('click', async function () {
			const tids = topicSelect.getSelectedTids();
			if (!tids.length) {
				return alerts.error('[[error:no-topics-selected]]');
			}
			const topics = await Promise.all(tids.map(tid => api.get(`/topics/${tid}`)));
			require(['forum/topic/tag'], function (tag) {
				tag.init(topics, ajaxify.data.tagWhitelist, onCommandComplete);
			});
		});

		CategoryTools.removeListeners();
		socket.on('event:topic_deleted', setDeleteState);
		socket.on('event:topic_restored', setDeleteState);
		socket.on('event:topic_purged', onTopicPurged);
		socket.on('event:topic_locked', setLockedState);
		socket.on('event:topic_unlocked', setLockedState);
		socket.on('event:topic_pinned', setPinnedState);
		socket.on('event:topic_unpinned', setPinnedState);
		socket.on('event:topic_moved', onTopicMoved);
		socket.on('event:topic_marked_important', setImportantState);
		socket.on('event:topic_unmarked_important', setImportantState);
	};

	function categoryCommand(method, path, command, onComplete) {
		if (!onComplete) {
			onComplete = function () {};
		}
		const tids = topicSelect.getSelectedTids();
		const body = {};
		const execute = function (ok) {
			if (ok) {
				Promise.all(tids.map(tid => api[method](`/topics/${tid}${path}`, body)))
					.then(onComplete)
					.catch(alerts.error);
			}
		};

		if (!tids.length) {
			return alerts.error('[[error:no-topics-selected]]');
		}

		switch (command) {
			case 'delete':
			case 'restore':
			case 'purge':
				bootbox.confirm(`[[topic:thread-tools.${command}-confirm]]`, execute);
				break;

			case 'pin':
				threadTools.requestPinExpiry(body, execute.bind(null, true));
				break;

			case 'markImportant':
			case 'unmarkImportant':
				execute(true);
				break;

			default:
				execute(true);
				break;
		}
	}

	CategoryTools.removeListeners = function () {
		socket.removeListener('event:topic_deleted', setDeleteState);
		socket.removeListener('event:topic_restored', setDeleteState);
		socket.removeListener('event:topic_purged', onTopicPurged);
		socket.removeListener('event:topic_locked', setLockedState);
		socket.removeListener('event:topic_unlocked', setLockedState);
		socket.removeListener('event:topic_pinned', setPinnedState);
		socket.removeListener('event:topic_unpinned', setPinnedState);
		socket.removeListener('event:topic_moved', onTopicMoved);
		socket.removeListener('event:topic_marked_important', setImportantState);
		socket.removeListener('event:topic_unmarked_important', setImportantState);
	};

	function closeDropDown() {
		$('.thread-tools .show').removeClass('show');
	}

	function onCommandComplete() {
		closeDropDown();
		topicSelect.unselectAll();
	}

	function onDeleteRestoreComplete() {
		closeDropDown();
		updateDropdownOptions();
	}

	function onPurgeComplete() {
		closeDropDown();
		topicSelect.unselectAll();
		updateDropdownOptions();
	}

	function updateDropdownOptions() {
		const tids = topicSelect.getSelectedTids();
		const isAnyDeleted = isAny(isTopicDeleted, tids);
		const areAllDeleted = areAll(isTopicDeleted, tids);
		const isAnyPinned = isAny(isTopicPinned, tids);
		const isAnyLocked = isAny(isTopicLocked, tids);
		const isAnyScheduled = isAny(isTopicScheduled, tids);
		const areAllScheduled = areAll(isTopicScheduled, tids);
		const isAnyImportant = isAny(isTopicImportant, tids);


		components.get('topic/delete').toggleClass('hidden', isAnyDeleted);
		components.get('topic/restore').toggleClass('hidden', isAnyScheduled || !isAnyDeleted);
		components.get('topic/purge').toggleClass('hidden', !areAllDeleted || !tids.length);

		components.get('topic/lock').toggleClass('hidden', isAnyLocked);
		components.get('topic/unlock').toggleClass('hidden', !isAnyLocked);

		components.get('topic/pin').toggleClass('hidden', areAllScheduled || isAnyPinned);
		components.get('topic/unpin').toggleClass('hidden', areAllScheduled || !isAnyPinned);

		components.get('topic/markImportant').toggleClass('hidden', areAllScheduled || isAnyImportant);
		components.get('topic/unmarkImportant').toggleClass('hidden', areAllScheduled || !isAnyImportant);


		components.get('topic/merge').toggleClass('hidden', isAnyScheduled);
	}

	function isAny(method, tids) {
		for (let i = 0; i < tids.length; i += 1) {
			if (method(tids[i])) {
				return true;
			}
		}
		return false;
	}

	function areAll(method, tids) {
		for (let i = 0; i < tids.length; i += 1) {
			if (!method(tids[i])) {
				return false;
			}
		}
		return true;
	}

	function isTopicDeleted(tid) {
		return getTopicEl(tid).hasClass('deleted');
	}

	function isTopicLocked(tid) {
		return getTopicEl(tid).hasClass('locked');
	}

	function isTopicPinned(tid) {
		return getTopicEl(tid).hasClass('pinned');
	}

	function isTopicImportant(tid) {
		return getTopicEl(tid).hasClass('markImportant');
	}

	function isTopicScheduled(tid) {
		return getTopicEl(tid).hasClass('scheduled');
	}

	function getTopicEl(tid) {
		return components.get('category/topic', 'tid', tid);
	}

	function setDeleteState(data) {
		const topic = getTopicEl(data.tid);
		topic.toggleClass('deleted', data.isDeleted);
		topic.find('[component="topic/locked"]').toggleClass('hidden', !data.isDeleted);
	}

	function setPinnedState(data) {
		const topic = getTopicEl(data.tid);
		topic.toggleClass('pinned', data.isPinned);
		topic.find('[component="topic/pinned"]').toggleClass('hidden', !data.isPinned);
		ajaxify.refresh();
	}

	function setImportantState(data) {
		const topic = getTopicEl(data.tid);
		topic.toggleClass('markImportant', data.isMarkImportant);
		topic.find('[component="topic/markImportant"]').toggleClass('hidden', !data.isMarkImportant);
	}

	function setLockedState(data) {
		const topic = getTopicEl(data.tid);
		topic.toggleClass('locked', data.isLocked);
		topic.find('[component="topic/locked"]').toggleClass('hidden', !data.isLocked);
	}

	function onTopicMoved(data) {
		getTopicEl(data.tid).remove();
	}

	function onTopicPurged(data) {
		getTopicEl(data.tid).remove();
	}

	function handlePinnedTopicSort() {
		if (!ajaxify.data.topics || !ajaxify.data.template.category) {
			return;
		}
		const numPinned = ajaxify.data.topics.filter(topic => topic.pinned).length;
		if ((!app.user.isAdmin && !app.user.isMod) || numPinned < 2) {
			return;
		}

		app.loadJQueryUI(function () {
			const topicListEl = $('[component="category"]').filter(function (i, e) {
				return !$(e).parents('[widget-area],[data-widget-area]').length;
			});
			let baseIndex = 0;
			topicListEl.sortable({
				axis: 'y',
				handle: '[component="topic/pinned"]',
				items: '[component="category/topic"].pinned',
				start: function () {
					baseIndex = parseInt(topicListEl.find('[component="category/topic"].pinned').first().attr('data-index'), 10);
				},
				update: function (ev, ui) {
					const tid = ui.item.attr('data-tid');
					const pinnedTopicEls = topicListEl.find('[component="category/topic"].pinned');
					let newIndex = 0;
					pinnedTopicEls.each((index, el) => {
						if ($(el).attr('data-tid') === tid) {
							newIndex = index;
							return false;
						}
					});

					socket.emit('topics.orderPinnedTopics', {
						tid: tid,
						order: baseIndex + newIndex,
					}, function (err) {
						if (err) {
							return alerts.error(err);
						}
						pinnedTopicEls.each((index, el) => {
							$(el).attr('data-index', baseIndex + index);
						});
					});
				},
			});
		});
	}

	return CategoryTools;
});
