module.exports = function(app){
	app.get('/adm/add-noticia', function(req, res){
		res.render('admin/form_add_noticia');
	});	
};