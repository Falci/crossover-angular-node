(function () {

  angular.module('ebid')
    .controller('StatsController', StatsController);

  function StatsController(SessionService) {
    var vm = this;

    vm.user = SessionService.user;
  }

})();
