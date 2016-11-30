'use strict';

angular.module('myApp.IraqAirplaneView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Projects/IraqAirplane', {
        templateUrl: 'projects/IraqAirplane/IraqAirplane.html',
        controller: 'ViewCtrl_IraqAirplane'
  });
}])

.controller('ViewCtrl_IraqAirplane', [function () {

}]);