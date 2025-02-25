// Client file uses jQuery to change topics appearance by adding and removing the "important" CSS class
// This file connects the front and backend.

'use strict';

define('forum/topics/important-messages', ['api', 'alerts'], function (api) {
	var importantMessages = {};

    //marks a topic as important. 
    // mid : message id
    // tid : topic id
	importantMessages.mark = function (mid, roomId) {
		return api.put(`/topic/${tid}/messages/${mid}/important`, {}).then(() => {
			$(`[component="topic/message"][data-mid="${mid}"]`).addClass('important');
		});
	};

    //unmarks a topic as important. 
	importantMessages.unmark = function (mid, roomId) {
		return api.del(`/topic/${tid}/messages/${mid}/important`, {})
			.then(() => {
				$(`[component="topic/message"][data-mid="${mid}"]`).removeClass('important');
			});
	};

    //checks if already marked or unmarked and toggles it
	importantMessages.toggle = function (mid, roomId) {
		const messageElement = $(`[component="topic/message"][data-mid="${mid}"]`);
		if (messageElement.hasClass('important')) {
			return importantMessages.unmark(mid, roomId);
		}
		return importantMessages.mark(mid, roomId);
	};

	return importantMessages;
});

