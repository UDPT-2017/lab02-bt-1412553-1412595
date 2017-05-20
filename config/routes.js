var controller = require ('../app/controller');
module.exports = function (app)
{
	//======================================================
	app.get('/', controller.home.index);
	app.get('/messages', controller.messages.index);
	app.get('/about', controller.about.index);
	app.get('/login', controller.login.index);
	app.get('/signup', controller.signup.index);
	app.get('/user', controller.user.index);
};