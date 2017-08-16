var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

	connection = dbConnection();

	app.get('/noticias', function(req, res){
		connection.query("select * from noticias", function(error, result){
			console.log(result);
			// res.send(result);
			res.render('noticias/noticias', {noticias: result});
		});
	});
};


