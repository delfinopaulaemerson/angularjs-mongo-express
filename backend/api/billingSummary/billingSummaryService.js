const _ = require('lodash');
const billingCycle = require('../billingCycle/billingCycle');

// Mais uma função middleware
function getSummary(req, res) {
  billingCycle.find({}, function(error, result) {
    var data = [];
    var credits = [];
    var debits = [];
    data = result;
    var totalCredito = 0;
    var totalDebito = 0;
    //metodo itera o array de credits e cria um novo array de valores de credits
    credits = getCredits(data);
    //metodo itera o array de debito e cria uma nova lista de valores de debits
    debits = getDebits(data);
    //metodo soma todos os valores do array de valores de credits
    totalCredito = valorTotalCredits(credits);
    //metodo soma todos os valores do array de valores de debits
    totalDebito = valorTotalDebits(debits);
    res.json(_.defaults({ credit: totalCredito, debt: totalDebito }));
  });

  function getCredits(arrayCredits) {
    var data = [];
    var credits = [];
    data = arrayCredits;
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < data.length; j++) {
        credits.push(data[i].credits[j].value);
      }
    }
    return credits;
  }
  function getDebits(arrayDebits) {
    var data = [];
    var debits = [];
    data = arrayDebits;
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < data.length; j++) {
        debits.push(data[i].debits[j].value);
      }
    }
    return debits;
  }

  function valorTotalCredits(arrayCredits) {
    var credits = [];
    var totalCredito = 0;
    credits = arrayCredits;
    for (var i = 0; i < credits.length; i++) {
      totalCredito = parseInt(totalCredito) + parseInt(credits[i]);
      console.log(credits[i]);
      console.log(`TOTAL CREDITO ${i} == > ${totalCredito}`);
    }
    return totalCredito;
  }
  function valorTotalDebits(arrayDebits) {
    var debits = [];
    var totalDebito = 0;
    debits = arrayDebits;
    for (var i = 0; i < debits.length; i++) {
      totalDebito = parseInt(totalDebito) + parseInt(debits[i]);
      console.log(debits[i]);
      console.log(`TOTAL DEBITO ${i} == > ${totalDebito}`);
    }
    return totalDebito;
  }
}

module.exports = { getSummary };
