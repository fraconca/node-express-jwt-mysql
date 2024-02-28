var mysql      = require('mysql');
var connection = mysql.createConnection({
    host        : 'seu_host',
    user        : 'seu_usuario',
    password    : 'sua_senha',
    database    : 'seu_banco_de_dados'
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


connection.end();