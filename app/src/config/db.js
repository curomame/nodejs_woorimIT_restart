const mysql = require('mysql');

const db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '!',
  databases: 'login_lecture',
  // port : 3306
});

db.connect();


module.exports = db;