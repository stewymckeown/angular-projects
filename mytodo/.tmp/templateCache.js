angular.module('mytodoApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"container\"> <h2>My todos</h2> <!-- Todos input --> <form role=\"form\" ng-submit=\"addTodo()\"> <div class=\"row\"> <div class=\"input-group\"> <input type=\"text\" ng-model=\"todo\" placeholder=\"What needs to be done?\" class=\"form-control\"> <span class=\"input-group-btn\"> <input type=\"submit\" class=\"btn btn-primary\" value=\"Add\"> </span> </div> </div> </form> <div ui-sortable ng-model=\"todos\"> <p class=\"input-group\" ng-repeat=\"todo in todos\" style=\"padding:5px 10px; cursor: move\"> <input type=\"text\" ng-model=\"todo\" class=\"form-control\"> <span class=\"input-group-btn\"> <button class=\"btn btn-danger\" ng-click=\"removeTodo($index)\" aria-label=\"Remove\">X</button> </span> </p> </div> </div>"
  );

}]);
