'use strict';

angular.module('myApp.OpticalReceiverView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Projects/OpticalReceiver', {
        templateUrl: 'projects/OpticalReceiver/OpticalReceiver.html',
        controller: 'ViewCtrl_OpticalReceiver'
  });
}])

.controller('ViewCtrl_OpticalReceiver', [function () {

}]);