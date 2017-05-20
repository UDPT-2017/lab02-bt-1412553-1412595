var signupController = {
	index: function (req, res) {
		res.render('signup', {title: 'Mời bạn đăng kí tài khoản', layout: 'location'});
	}
};

module.exports = signupController;