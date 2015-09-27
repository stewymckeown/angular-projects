'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
angular
  .module('mytodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.todos = [];

    $scope.addTodo = function() {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    };
  }]);

'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('mytodoApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"container\"> <h2>My todos</h2> <!-- Todos input --> <form role=\"form\" ng-submit=\"addTodo()\"> <div class=\"row\"> <div class=\"input-group\"> <input type=\"text\" ng-model=\"todo\" placeholder=\"What needs to be done?\" class=\"form-control\"> <span class=\"input-group-btn\"> <input type=\"submit\" class=\"btn btn-primary\" value=\"Add\"> </span> </div> </div> </form> <div ui-sortable ng-model=\"todos\"> <p class=\"input-group\" ng-repeat=\"todo in todos\" style=\"padding:5px 10px; cursor: move\"> <input type=\"text\" ng-model=\"todo\" class=\"form-control\"> <span class=\"input-group-btn\"> <button class=\"btn btn-danger\" ng-click=\"removeTodo($index)\" aria-label=\"Remove\">X</button> </span> </p> </div> </div>"
  );

}]);
