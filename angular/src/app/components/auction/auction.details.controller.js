(function () {

  angular.module('ebid')
    .controller('AuctionDetailsController', AuctionDetailsController);

  function AuctionDetailsController($mdDialog, item, AuctionApi) {
    var vm = this;

    vm.cancel = $mdDialog.cancel;
    vm.submit = submit;
    vm.auction = {
      product: item,
      quant: 1,
      bid: 1
    };

    function submit() {
      AuctionApi.save(vm.auction)
        .then(function () {
          $mdDialog.cancel();
        });
    }
  }

})();
