(function () {
  'use strict';

  angular
    .module('ebid')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
