'use strict';

angular.module('myApp.HeartRateMonitorView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Projects/HeartRateMonitor', {
    templateUrl: 'projects/HeartRateMonitor/HeartRateMonitor.html',
    controller: 'ViewCtrl_HeartRateMonitor'
  });
}])

.controller('ViewCtrl_HeartRateMonitor', [function () {

}]);