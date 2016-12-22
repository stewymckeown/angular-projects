(function () {

    'use strict';

    function MainCtrl(greeting) {
        var first = this;

        first.greeting = greeting;
    }

    angular.module('divesiteApp')
        .controller("MainCtrl", MainCtrl);


})();
