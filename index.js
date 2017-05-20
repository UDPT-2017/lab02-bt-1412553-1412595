var express = require('express');
var app = express();

require  ('./config')(app);
//star server
app.listen(3000, function () {
  console.log('Listen in port 3000!');
});

module.exports = app;