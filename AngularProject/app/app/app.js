'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.HomeView',
  'myApp.RobotView',
  'myApp.MotorTesterView',
  'myApp.HeartRateMonitorView',
  'myApp.obd2View',
  'myApp.IraqAirplaneView',
  'myApp.OpticalReceiverView',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/HomeView'});
}]);
 