var express = require('express');
var app = express();
var pg = require('pg');
var passport = require('passport');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use('/components',express.static("bower_components"));

app.engine('hbs', exphbs({}));
app.set('view engine', 'hbs');

app.get('/', function(req, res)
{
	res.render('index');
});

app.get('/messages', function(req, res)
{
	res.render('messages');
});

app.get('/about', function(req, res)
{
	res.render('about');
});
app.get('/login', function(req, res)
{
	res.render('login');
});
app.get('/signup', function(req, res)
{
	//show form
	res.render('signup');
});
app.get('/user', function(req, res)
{
	res.render('user');
});




//--------------------------------------------------------------
//route
app.get('/', function (req, res) {
  res.send('Hello World!');
});
//register user


//star server
app.listen(3000, function () {
  console.log('Listen in port 3000!');
});

module.exports = app;