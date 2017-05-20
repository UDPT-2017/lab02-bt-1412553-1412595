var usersController = {
	index: function(req, res) {
		res.render('user', {title: 'Thông tin bạn bè', layout: 'location'});
	}
};  module.exports = usersController;