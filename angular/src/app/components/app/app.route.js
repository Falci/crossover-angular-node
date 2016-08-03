(function () {
  'use strict';

  angular
    .module('ebid')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        template: '<div ui-view></div>',
        abstract: true
      });
  }

})();
