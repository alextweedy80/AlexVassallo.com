'use strict';

angular.module('myApp.obd2View', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Projects/obd2', {
        templateUrl: 'projects/obd2/obd2.html',
        controller: 'ViewCtrl_obd2'
  });
}])

.controller('ViewCtrl_obd2', [function () {

}]);