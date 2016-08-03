(function (){

  angular.module('ebid')
    .directive('auction', auction);

  function auction() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/auction/auction.html'
    };

  }
})();
