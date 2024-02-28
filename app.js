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


// Middleware de autenticação
function authenticateToken(req, res, next) {

    const token = req.headers['authorization'];
    if (!token) return res.status(401).send('Acesso não autorizado');
    jwt.verify(token, 'seu_segredo', (err, user) => {

        if (err) return res.status(403).send('Token inválido');
        req.user = user;
        next();

    });

};


// Listen da porta
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));