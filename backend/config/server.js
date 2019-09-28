const porta = 3003;
const bodyParse = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');
const queryParser = require('express-query-int');
//bodyparse vai ser responsavel pelos dados da submissao de um formulario
server.use(bodyParse.urlencoded({ extended: true }));

//bodyparse vai fazer uma concersao de json para objeto
server.use(bodyParse.json());
server.use(allowCors);
server.use(queryParser())

server.listen(porta, function() {
  console.log(`Backend running on port ${porta}`);
});

module.exports = server;
