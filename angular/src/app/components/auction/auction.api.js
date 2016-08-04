(function () {

  angular.module('ebid')
    .service('AuctionApi', AuctionApi);

  function AuctionApi(SessionService, $http, baseUrl) {
    var service = {
      save: save
    };

    return service;

    function save(data) {
      data.user = SessionService.user;

      return $http({
        method: 'POST',
        url: baseUrl.concat('/auctions'),
        data: data
      })
      .then(function (response) {
        return response.data;
      });

    }

  }
})();
