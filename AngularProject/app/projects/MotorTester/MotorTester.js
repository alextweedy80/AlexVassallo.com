'use strict';

angular.module('myApp.MotorTesterView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Projects/MotorTester', {
        templateUrl: 'projects/MotorTester/MotorTester.html',
        controller: 'ViewCtrl_MotorTester'
  });
}])

.controller('ViewCtrl_MotorTester', [function () {

}]);