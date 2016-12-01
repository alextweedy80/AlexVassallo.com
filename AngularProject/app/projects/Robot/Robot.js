'use strict';

angular.module('myApp.RobotView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Projects/Robot', {
    templateUrl: 'projects/robot/robot.html',
    controller: 'ViewCtrl_Robot'
  });
}])

.controller('ViewCtrl_Robot', [function() {

}]);