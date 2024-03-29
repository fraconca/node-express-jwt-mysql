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


// Rota de login para gerar token
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM usuarios WHERE username = ? AND password = ?', [username, password], (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
            const user = { username: results[0].username };
            const token = jwt.sign(user, 'seu_segredo');
            res.json({ token: token });
        } else {
            res.status(401).json({ message: 'Nome de usuário ou senha inválidos' });
        }
    });
});


// Rota protegida
app.get('/api/restrita', authenticateToken, (req, res) => {
    // Se chegou aqui, o token foi verificado com sucesso
    // Agora você pode manipular a solicitação com o usuário autenticado
    res.json({ message: 'Acesso permitido' });
});


// Listen da porta
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));