
module.exports = function(app){	
	
	app.get('/noticias', function(req, res){
		connection = app
		connection.query("select * from noticias", function(error, result){
			console.log(result);
			res.send(result);
			res.render('noticias/noticias', {noticias: result});
		});
	});
};


