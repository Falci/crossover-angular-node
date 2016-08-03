(function () {
  'use strict';

  angular
    .module('ebid')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('auth', {
        url: '/auth',
        template: '<div ui-view></div>',
        abstract: true
      })

      .state('auth.login', {
        url: '/login',
        templateUrl: 'app/components/auth/login.html',
        controller: 'LoginController',
        controllerAs: '$ctrl'
      });

    $urlRouterProvider.otherwise('/auth/login');
  }

})();
