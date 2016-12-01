'use strict';

angular.module('myApp.ProjectsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Projects', {
    templateUrl: 'Projects/Projects.html',
    controller: 'ViewCtrl_Projects'
  });
}])

.controller('ViewCtrl_Projects', [function ($scope, $rootScope) {

}]);

