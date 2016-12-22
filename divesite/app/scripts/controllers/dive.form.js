(function () {

    'use strict';

    function LogDiveCtrl(DiveService, $state) {
        var vm = this;

        vm.dive = {
            location: "Snorkel Trail",
            temperature: 10,
            visibility: 25,
            depth: 22,
            bottomTime: 44,
            weight: 12,
            startPressure: 220,
            endPressure: 55
        };

        vm.dive.diveDate = new Date();

        vm.saveDive = function () {

            console.log("Saving dive: " + vm.dive);

            DiveService.saveDive(vm.dive);

            console.log("Finished saving dive");
            $state.go('logbook');

        };

    }

    angular.module('divesiteApp')
        .controller("LogDiveCtrl", LogDiveCtrl);


})();
