(function () {

  angular.module('ebid')
    .provider('SocketService', SocketServiceProvider);

  function SocketServiceProvider(io) {
    var socket = io();

    this.$get = socketService;

    function socketService($q) {
      var service = {
        login: login
      };

      function login(username) {
        socket.emit('login', username);

        return $q.resolve();
      }

      return service;
    }
  }


})();
