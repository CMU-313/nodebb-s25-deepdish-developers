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
