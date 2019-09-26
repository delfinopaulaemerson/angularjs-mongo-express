const billingCycle = require('./billingCycle');

//criando os servicos rest para o methodo
billingCycle.methods(['get', 'post', 'put', 'delete']);

module.exports = billingCycle;
