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
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var config = {
  user: 'postgres', //env var: PGUSER
  database: 'DangKi', //env var: PGDATABASE
  password: 'tqhba29041995', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

//this initializes a connection pool
//it will keep idle connections open for 30 seconds
//and set a limit of maximum 10 idle clients
var pool = new pg.Pool(config);
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));


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
app.get('/signupcomple', function(req, res)
{
	//show form
	
});
//Chức năng đăng kí.
app.get('/signup', function(req, res)
{
	//show form
	res.render('signup');
});
app.post('/signup', urlencodedParser, function(req, res)
{
	//insert dba
	
	pool.connect(function(err, client, done) {
	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }
	  	var Email = req.body.txtEmail;
		var Password = req.body.txtPassword;
		var FullName = req.body.txtFullName;
		var Phone = req.body.txtPhone;
	  client.query("INSERT INTO DangKiTK VALUES ('"+Email+"','"+Password+"','"+FullName+"','"+Phone+"')", function(err, result) {
	    done(err);

	    if(err) {
	    	res.end();
	      return console.error('error running query', err);
	    }
	    res.render('signupcomple');
	  });
	});
});
//---------------------------------------------------
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