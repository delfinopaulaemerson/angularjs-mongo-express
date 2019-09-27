angular.module('primeiraApp').controller('DashboardCtrl', ['$http', 'consts', DashboardController]);

function DashboardController($http, consts) {
  const vm = this;
  vm.getSummary = function() {
    const url = `${consts.apiUrl}/billingSummary`;
    $http.get(url).then(function(response) {
      const { credit = 0, debt = 0 } = response.data;
      vm.credit = credit;
      console.log(`vm.credit==>${vm.credit}`);
      vm.debt = debt;
      console.log(`vm.debit ==>${vm.debt}`);
      vm.total = credit - debt;
      console.log(`vm.total ==>${vm.total}`);
    });
  };

  vm.getSummary();
}
