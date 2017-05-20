var aboutsController = {
	index: function (req, res) {
		res.render('about', {title: 'Thông tin nhóm thực hiện', layout: 'location'});
	}
};

module.exports = aboutsController;