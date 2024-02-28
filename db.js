var mysql      = require('mysql');
var connection = mysql.createConnection({
    host        : 'seu_host',
    user        : 'seu_usuario',
    password    : 'sua_senha',
    database    : 'seu_banco_de_dados'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('A solução é: ', results[0].solution);
});
 
connection.end();