(function () {

    'use strict';

    /**
    * @ngdoc overview
    * @name divesiteApp
    * @description
    * # divesiteApp
    *
    * Main module of the application.
    */
    angular
        .module('divesiteApp', [
          'ngAnimate',
          'ngCookies',
          'ngResource',
          'ngRoute',
          'ngSanitize',
          'ngTouch',
          'ui.router',
          'datatables',
          'datatables.bootstrap'
        ])
        .config(function config($stateProvider) {
            $stateProvider.state("main", {
                url: "/",
                controller: "MainCtrl",
                controllerAs: "mainCtrl",
                templateUrl: "views/main.html"
            });
            $stateProvider.state("logDive", {
                url: "/log-dive",
                controller: "LogDiveCtrl",
                controllerAs: "logDiveCtrl",
                templateUrl: "views/log-dive.html"
            });
            $stateProvider.state("logbook", {
                url: "/logbook",
                controller: "LogBookCtrl",
                controllerAs: "logBookCtrl",
                templateUrl: "views/logbook.html"
            });
            $stateProvider.state("register", {
                url: "/register",
                controller: "RegisterCtrl",
                controllerAs: "registerCtrl",
                templateUrl: "views/register-user.html"
            });
            $stateProvider.state("login", {
                url: "/login",
                controller: "LoginCtrl",
                controllerAs: "loginCtrl",
                templateUrl: "views/login.html"
            });
            $stateProvider.state("logout", {
                url: "/logout",
                controller: function($state, AuthenticationService) {
                    AuthenticationService.logout();
                    $state.go('login');
                }
            });
        })
        .service("greeting", function Greeting() {
            var greeting = this;
            greeting.message = "Default";
        });

})();
