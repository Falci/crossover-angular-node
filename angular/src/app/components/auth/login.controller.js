(function (){

  angular.module('ebid')
    .controller('LoginController', LoginController);

  function LoginController($state, SocketService) {
    var vm = this;

    vm.enter = enter;

    function enter(username) {
      SocketService.login(username)
        .then(function () {
          $state.go('app.dashboard');
        });
    }

  }

})();
