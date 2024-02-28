const express = require('express');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');

const app = express();



app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
