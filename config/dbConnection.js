const mysql = require('mysql');
const config = require('config');

const conexao = function mysqlConnection(){	
	return mysql.createConnection({
		host: config.db.host,
		user: config.db.user,
		password: config.db.password,
		database: config.db.database
	});
}


module.exports = function(){
	cosole.log(config.db.host);
	console.log('autoload conexao com o banco.'); 	
	return conexao;
};

