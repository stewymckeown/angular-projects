(function () {

    'use strict';

    function NavbarCtrl($location, $rootScope, AuthFactory) {
        var vm = this;

        return init();

        function init() {
            vm.isCollapsed = true;
            vm.isActive = isActive;
            vm.toggle = toggle;
        }

        function isActive (route) {
            return route === $location.path();
        }

        function toggle() {
            vm.isCollapsed = !vm.isCollapsed;
        }
    }

    function AuthFactory($window) {
        'use strict';

        var store = $window.localStorage;
        var key = 'auth-token';
        var loggedInUser = 'logged-in-user';

        function getToken() {
            return store.getItem(key);
        }

        function setToken(token) {
            if (token) {
              store.setItem(key, token);
            } else {
              store.removeItem(key);
            }
        }

        function getLoggedInUser () {
            return store.getItem(loggedInUser);
        }

        function setLoggedInUser (username) {
            if (username) {
              store.setItem(loggedInUser, username);
            } else {
              store.removeItem(loggedInUser);
            }
        }

        return {
            setToken: setToken,
            getToken: getToken,
            getLoggedInUser : getLoggedInUser,
            setLoggedInUser : setLoggedInUser
        };
    }

    function AuthInterceptor(AuthFactory) {
        'use strict';

        return {
            request: addToken
        };

        function addToken(config) {
            var token = AuthFactory.getToken();
            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        }
    }

    function AuthenticationService($http, $rootScope, AuthFactory) {

        function login(email, password) {

            console.log("LoginService received login details: " + email + " : " + password);

            // TODO: encode the email and password before sending.
            return $http.post('http://localhost:8080/DiveService/api/divesite/user/login', {
              email: email,
              password: password
            }).then(function success(response) {
              console.log("Successfully logged in. Token is: " + response.data.value);
              AuthFactory.setToken(response.data.value);
              AuthFactory.setLoggedInUser(email);
              $rootScope.userIsLoggedIn = true;
              return response;
            });
        }

        function logout () {
            AuthFactory.setToken();
            AuthFactory.setLoggedInUser();
            $rootScope.userIsLoggedIn = false;
        }

        return {
            login: login,
            logout: logout
        };
    }

    angular.module('divesiteApp')
        .controller('NavbarCtrl', NavbarCtrl)
        .service("AuthenticationService", AuthenticationService)
        .factory("AuthFactory", AuthFactory)
        .factory("AuthInterceptor", AuthInterceptor);
})();
