var mysql      = require('mysql');
var connection = mysql.createConnection({
    host        : 'seu_host',
    database    : 'seu_banco_de_dados'
    user        : 'seu_usuario',
    password    : 'sua_senha',
});


connection.connect();


// Um simples query SELECT
connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
);


// Usando Placeholders
connection.query(
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
    ['Page', 45],
    function (err, results) {
      console.log(results);
    }
  );


connection.end();