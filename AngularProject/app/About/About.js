'use strict';

angular.module('myApp.AboutView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/About', {
        templateUrl: 'About/About.html',
        controller: 'ViewCtrl_About',
  });
}])

.controller('ViewCtrl_About', [function ($scope) {

}]);