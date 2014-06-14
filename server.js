var express = require('express');
var razor   = require('kally-razor');
var Home    = require('./src/controllers/home.js');

var app     = express();
var home    = new Home({ dirname: __dirname })
var port    = process.env.PORT || 1337;

app.set('port', port);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

app.get('/',      home.index);
app.get('/about', home.about);

if (process.env.NODETIME_ACCOUNT_KEY) {
  require('nodetime').profile({
    accountKey: process.env.NODETIME_ACCOUNT_KEY,
    appName: 'createsend-node-website'
  });
}

app.listen(port, function () {
  console.log('Waiting for connections on port ' + app.get('port'));
});
