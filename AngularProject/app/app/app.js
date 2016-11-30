'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.HomeView',
  'myApp.Robot',
  'myApp.MotorTester',
  'myApp.HeartRateMonitor',
  'myApp.obd2',
  'myApp.IraqAirplane',
  'myApp.OpticalReceiver',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/HomeView'});
}]);
 