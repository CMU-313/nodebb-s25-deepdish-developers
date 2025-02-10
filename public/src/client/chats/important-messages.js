'use strict';

define('forum/chats/important-messages', ['api', 'alerts'], function (api) {
	var importantMessages = {};
	importantMessages.mark = function (mid, roomId) {
		return api.put(`/chats/${roomId}/messages/${mid}/important`, {}).then(() => {
			$(`[component="chat/message"][data-mid="${mid}"]`).addClass('important');
		});
	};

	importantMessages.unmark = function (mid, roomId) {
		return api.del(`/chats/${roomId}/messages/${mid}/important`, {})
			.then(() => {
				$(`[component="chat/message"][data-mid="${mid}"]`).removeClass('important');
			});
	};

	importantMessages.toggle = function (mid, roomId) {
		const messageElement = $(`[component="chat/message"][data-mid="${mid}"]`);
		if (messageElement.hasClass('important')) {
			return importantMessages.unmark(mid, roomId);
		}
		return importantMessages.mark(mid, roomId);
	};
	importantMessages.toggle = function (mid, roomId) {
		const messageElement = $(`[component="chat/message"][data-mid="${mid}"]`);
		if (messageElement.hasClass('important')) {
			return importantMessages.unmark(mid, roomId);
		}
		return importantMessages.mark(mid, roomId);
	};

	return importantMessages;
});


// importantMessages.mark = function (mid, roomId) {
//     api.put(`/chats/${roomId}/messages/${mid}/important`, {}).then(() => {
//         $(`[component="chat/message"][data-mid="${mid}"]`).toggleClass('important', true);
//     }).catch(alerts.error);
// };

// importantMessages.unmark = function (mid, roomId) {
//     api.del(`/chats/${roomId}/messages/${mid}/important`, {}).then(() => {
//         $(`[component="chat/message"][data-mid="${mid}"]`).toggleClass('important', false);
//     }).catch(alerts.error);
// };


