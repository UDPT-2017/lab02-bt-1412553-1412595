var loginsController = {
	index: function (req, res) {
		res.render('login', {title: 'Đăng nhập', layout: 'location'});
	}
};

module.exports = loginsController;