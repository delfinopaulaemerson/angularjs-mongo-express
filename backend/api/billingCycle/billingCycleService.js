const billingCycle = require('./billingCycle');

//criando os servicos rest para o methodo
billingCycle.methods(['get', 'post', 'put', 'delete']);

//new: true significa que sempre que efetuar o update retornara o objeto novo
//unValidators: true  no run time da aplicacao os validadores sao acionados
billingCycle.updateOptions({ new: true, runValidators: true });

module.exports = billingCycle;
