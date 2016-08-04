(function () {

  angular.module('ebid')
    .service('SessionService', SessionService);

  function SessionService(SocketService) {
    var service = {
      login: login,
      user: {}
    };

    return service;

    function login(username) {
      return SocketService.login(username)
        .then(function (user) {
          angular.copy(user, service.user);
        });
    }
  }
})();
