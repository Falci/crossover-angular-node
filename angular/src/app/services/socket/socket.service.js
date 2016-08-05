(function () {

  angular.module('ebid')
    .provider('SocketService', SocketServiceProvider);

  function SocketServiceProvider(io) {
    var socket = io();

    this.$get = socketService;

    function socketService($q) {
      // TODO refactor: this service knows too much
      var service = {
        login: login,
        newAuction: newAuction,
        on: on
      };

      return service;

      function login(username) {
        return socketAsPromise('login', username);
      }

      function newAuction(data) {
        socket.emit('new-auction', data);
      }

      function on(event, callback) {
        return socket.on(event, callback);
      }

      function socketAsPromise(event, data) {
        var deferred = $q.defer();

        socket.on(event, function (result) {
          deferred.resolve(result);
        });

        socket.emit(event, data);

        return deferred.promise;
      }
    }
  }


})();
