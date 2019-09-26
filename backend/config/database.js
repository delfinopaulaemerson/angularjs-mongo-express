//dependencia para conexao ao mongo db
const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://localhost:27017/db_finance');

//mensagem global de validacao dos dados do mongo db database.js
mongoose.Error.messages.general.require = "O Atributo '{PATH}' é obrigatorio.";
