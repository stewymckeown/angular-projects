(function () {

  'use strict';

  function LogBookCtrl(LogBookService, DTOptionsBuilder, DTColumnDefBuilder, $resource) {
    var vm = this;
    vm.diveList = [];

    vm.dtOptions = DTOptionsBuilder.newOptions()
                                  .withPaginationType('full_numbers')
                                  .withBootstrap();

    vm.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(1).withOption('orderData', '0'),
      DTColumnDefBuilder.newColumnDef(0).withOption('type', 'nullable').notVisible()
    ];

    $resource('resources/data.json').query().$promise.then(function(logBook) {
      vm.diveList = logBook;
    });

  }

  function LogBookService($q) {
    //var lbs = this;
    var logBook = [];

    var getLogBook = function () {
      var defer = $q.defer();
      defer.resolve(logBook);
      return defer.promise;
    };

    return {
      getLogBook: getLogBook
    };
  }

  angular.module('divesiteApp')
    .controller("LogBookCtrl", LogBookCtrl)
    .service("LogBookService", LogBookService);


})();





