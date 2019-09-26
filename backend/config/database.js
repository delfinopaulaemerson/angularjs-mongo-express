//dependencia para conexao ao mongo db
const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://localhost:27017/db_finance');

//mensagem global de validacao dos dados do mongo db database.js
mongoose.Error.messages.general.require = "O Atributo '{PATH}' é obrigatorio.";
mongoose.Error.messages.Number.min =
  "O  '{VALUE}' informado é menor que o limite mínimo de '{MIN}' . ";
mongoose.Error.messages.Number.max =
  "O  '{VALUE}' informado é maior que o limite máximo de '{MAX}' . ";
