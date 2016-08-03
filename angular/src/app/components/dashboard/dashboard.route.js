(function () {
  'use strict';

  angular
    .module('ebid')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('app.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/components/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: '$ctrl'
      });
  }

})();
