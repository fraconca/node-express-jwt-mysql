// Require
const express = require('express');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');

// Inicializar Express
const app = express();

// Inicializar e conectar ao MySQL
const db = mysql.createConnection({
    host: 'seu_host',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'seu_banco_de_dados'
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
