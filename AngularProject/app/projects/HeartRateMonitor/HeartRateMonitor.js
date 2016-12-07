'use strict';

angular.module('myApp.HeartRateMonitorView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Projects/HeartRateMonitor', {
    templateUrl: 'Projects/HeartRateMonitor/HeartRateMonitor.html',
    controller: 'ViewCtrl_HeartRateMonitor'

  });
}])

.controller('ViewCtrl_HeartRateMonitor', ['$scope', '$location', '$anchorScroll',
    function ($scope, $location, $anchorScroll) {
        $scope.gotoChpt1 = function () {
            $location.hash('chpt1');
            $anchorScroll();
        }
        $scope.gotoChpt2 = function () {
            $location.hash('chpt2');
            $anchorScroll();
        }
        $scope.gotoChpt21 = function () {
            $location.hash('chpt21');
            $anchorScroll();
        }
        $scope.gotoChpt22 = function () {
            $location.hash('chpt22');
            $anchorScroll();
        }
        $scope.gotoChpt3 = function () {
            $location.hash('chpt3');
            $anchorScroll();
        }
        $scope.gotoChpt31 = function () {
            $location.hash('chpt31');
            $anchorScroll();
        }
        $scope.gotoChpt32 = function () {
            $location.hash('chpt32');
            $anchorScroll();
        }
        $scope.gotoChpt33 = function () {
            $location.hash('chpt33');
            $anchorScroll();
        }
        $scope.gotoChpt34 = function () {
            $location.hash('chpt34');
            $anchorScroll();
        }
        $scope.gotoChpt35 = function () {
            $location.hash('chpt35');
            $anchorScroll();
        }

    }]);