module.exports = function(app){

	app.get('/noticias', function(req, res){

		var mysql = require('mysql');

		var connection = mysql.createConnection({
			host:'mysql-container',
			user: 'root',
			password: '',
			database: 'db'
		});

		connection.query("select * from noticias", function(error, result){
			res.send(result);
		});

		res.render('noticias/noticias');
	});
};


