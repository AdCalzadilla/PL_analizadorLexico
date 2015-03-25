var express = require('express');
var app = express();
var path = require('path');
var expressLayouts = require('express-ejs-layouts');
var $ = require('jquery');
var _ = require('underscore');

app.set('port', (process.env.PORT || 3000));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.set('layout', 'myLayout') // defaults to 'layout'  '

app.use(expressLayouts);
//app.use(express.static('public'));
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Analizador Léxico' });
})
