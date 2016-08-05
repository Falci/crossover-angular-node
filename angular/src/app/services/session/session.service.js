(function () {

  angular.module('ebid')
    .service('SessionService', SessionService);

  function SessionService(SocketService, $timeout) {
    var service = {
      login: login,
      user: {},
      auction: {},
      queue: {}
    };

    activate();

    return service;

    function activate() {
      SocketService.on('queue', function (queue) {
        angular.copy(queue, service.queue);
      });

      SocketService.on('auction', function (auction) {
        angular.copy(auction, service.auction);

        countDown();
      });
    }

    function countDown() {
      var oneSecond = 1000;

      if(service.auction.finishIn > 0){
        service.auction.finishIn--;
        $timeout(countDown, oneSecond);
      }

    }

    function login(username) {
      return SocketService.login(username)
        .then(function (user) {
          angular.copy(user, service.user);
        });
    }
  }
})();
