const express = require('express');

module.exports = function(server) {
  //API Route
  const router = express.Router();

  //Todas as rotas foi definidas dentro de  /api
  server.use('/api', router);

  const billingCycleService = require('../api/billingCycle/billingCycleService');

  billingCycleService.register(router, '/billingCycles');
};
