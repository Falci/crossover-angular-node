(function (){

  angular.module('ebid')
    .directive('inventory', inventory);

  function inventory() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/inventory/inventory.html'
    };

  }
})();
