(function (){
  'use strict';

  angular
    .module('ebid')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $state, SessionService) {

    var register = $rootScope.$on('$stateChangeStart', onChange);

    $rootScope.$on('$destroy', register);

    function onChange(event, toState) {

      if(!toState.publicAccess && !SessionService.user.id){
        event.preventDefault();

        // SessionService.check()
        //   .then(function () {
        //     $state.go(toState.name, toParams);
        //   })
        //   .catch(function () {
        $state.go('auth.login');
        //   });

        return false;
      }
    }
  }

})();
