var express = require('express');
var consign = require('consign')

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Carregando todas as rotas automaticamente
consign()
	.include('app/routes')
	.then('dbConnection')
	.into(app);


module.exports = app
