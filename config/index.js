var express = require('express');
var pg = require('pg');
var connectionString = "postgres://postgres:123@localhost:5432/DangKiTK";
var passport = require('passport');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var path = require ('path');
module.exports = function (app)
{

	app.use(express.static('public'));
	app.use('/components',express.static("bower_components"));

	app.engine('hbs', exphbs({
		extname: '.hbs',
		layoutsDir: path.resolve('app/views/layouts'),
		partialsDir:path.resolve('app/views/partials')
	}));
	app.set('view engine', 'hbs');
	app.set('views', path.resolve('app/views'))

	var urlencodedParser = bodyParser.urlencoded({ extended: false });
	var config = {
	  user: 'postgres', 
	  database: 'DangKi', 
	  password: 'tqhba29041995', 
	  host: 'localhost', 
	  port: 5432, 
	  max: 10, 
	  idleTimeoutMillis: 30000, 
	};


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
	//=================================================================

	
	//app.get('/signupcomple', function(req, res)
	//{

	//});
	//=========================================================
	//Chức năng đăng kí.
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
	//--------------------------------------------------------
	app.post('/login', urlencodedParser, function(req, res)
	{
		//insert dba
		
		pool.connect(function(err, client, done) {
		  if(err) {
		    return console.error('error fetching client from pool', err);
		  }
		  	var Email = req.body.txtEmail;
			var Password = req.body.txtPassword;

		  client.query("SELECT * FROM DangKiTK WHERE email = '"+txtEmail+"'", function(err, result) {
		    done(err);

		    if(err) {
		    	res.end();
		      return console.error('error running query', err);
		    }
		    console.log(result.row[0]);
		    //res.render('signupcomple');
		  });
		});
	});
	//---------------------------------------------------
	require('./routes')(app);
}


