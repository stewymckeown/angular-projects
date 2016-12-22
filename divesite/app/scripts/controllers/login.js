(function () {

    'use strict';

    function LoginCtrl(AuthenticationService) {
        var lvm = this;

        lvm.user = {};

        lvm.message = "Hello Test";

        lvm.handleError = function (response) {
            console.log("Error: " + response);
        };

        lvm.login = function (email, password) {

            console.log("Received login details: " + email + " : " + password);

            AuthenticationService.login(email, password).then(function success(response){
                //lvm.user = response.data;

                console.log("Received response info: " + response);
            }, lvm.handleError);
        };
    }

    angular.module('divesiteApp')
      .controller("LoginCtrl", LoginCtrl);
app
})();

