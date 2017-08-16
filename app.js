var app = require('./config/server')

// var noticias = require('./app/routes/noticias')(app);
// var home = require('./app/routes/home')(app);
// var addNoticias = require('./app/routes/inclusao_noticias')(app);

app.listen(3000, function(){
	console.log("Server Running"); 	
});