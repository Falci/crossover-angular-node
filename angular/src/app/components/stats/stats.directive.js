(function (){

  angular.module('ebid')
    .directive('stats', stats);

  function stats() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/stats/stats.html'
    };

  }
})();
