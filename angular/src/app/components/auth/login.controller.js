(function (){

  angular.module('ebid')
    .controller('LoginController', LoginController);

  function LoginController($state, SessionService) {
    var vm = this;

    vm.enter = enter;

    function enter(username) {
      SessionService.login(username)
        .then(function () {
          $state.go('app.dashboard');
        });
    }

  }

})();
