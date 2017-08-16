var mysql = require('mysql');

module.exports = function(){
	return mysql.createConnection({
		host:'mysql',
		user: 'root',
		password: '',
		database: 'db'
	});
};

