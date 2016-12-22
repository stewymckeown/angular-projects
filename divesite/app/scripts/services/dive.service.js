(function () {

  'use strict';

  function DiveService(AuthFactory, $http) {
    var vm = this;

    vm.saveDive = function (dive) {
      dive.userId = AuthFactory.getLoggedInUser();

      console.log("Saving dive: " + dive);

      $http.post('http://localhost:8080/DiveService/api/divesite/divebook/log-dive', dive)
        .then(function(data) {
          //return data.data;
          console.log("Successfully logged dive!");
        });
    };

  }

  angular.module('divesiteApp')
    .service("DiveService", DiveService);


})();
