var messagesController = {
	index: function(req, res) {
		res.render('messages', {title: 'Tin nhắn của bạn', layout: 'location'});
	}
};

module.exports = messagesController;