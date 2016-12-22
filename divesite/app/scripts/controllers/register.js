(function () {

  'use strict';

  function RegisterCtrl($http) {
    var vm = this;

    vm.user = { surname: 'Jones'};

    vm.registerUser = function () {

      console.log("Creating User: " + vm.user);

      $http.post('http://localhost:8080/UserService/api/divesite/user/create', vm.user)
        .then(function(data) {
          //return data.data;
          console.log("Successfully created user!");
        });
    };
  }

  //function RegisterUserService($http) {
  //
  //  var service = this;
  //  service.getCustomer = getCustomer;
  //
  //  return service;
  //
  //  function getCustomer(id) {
  //    return $http.post('http://localhost:8080/UserService/api/divesite/user/create', )
  //      .then(function(data) {
  //        return data.data;
  //      });
  //  }
  //}

  angular.module('divesiteApp')
    .controller("RegisterCtrl", RegisterCtrl);


})();
