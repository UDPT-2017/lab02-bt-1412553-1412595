var homeController = {
	index: function(req, res) {
		res.render('index', {title: 'Chào mừng bạn với đến với website', layout: 'location'});
	}
};
module.exports = homeController;