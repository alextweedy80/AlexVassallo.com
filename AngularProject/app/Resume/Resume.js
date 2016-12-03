'use strict';

angular.module('myApp.ResumeView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Resume', {
        templateUrl: 'Resume/Resume.html',
        controller: 'ViewCtrl_Resume',
  });
}])

.controller('ViewCtrl_Resume', [function ($scope) {

}]);