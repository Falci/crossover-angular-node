(function () {

  angular.module('ebid')
    .controller('InventoryController', InventoryController);

  function InventoryController($mdMedia, $mdDialog, $document, SessionService) {
    var vm = this;

    vm.items = SessionService.user.inventory;
    vm.openAuctionDialog = openAuctionDialog;

    function openAuctionDialog(event, item) {
      $mdDialog.show({
        controller: 'AuctionDetailsController',
        controllerAs: '$dialog',
        templateUrl: 'app/components/auction/auction.details.html',
        parent: angular.element($document.body),
        targetEvent: event,
        clickOutsideToClose: false,
        fullscreen: ($mdMedia('sm') || $mdMedia('xs')),
        locals: {
          item: item
        }
      });
    }
  }

})();
