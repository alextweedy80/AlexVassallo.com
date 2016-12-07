'use strict';

angular.module('myApp.RobotView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Projects/Robot', {
    templateUrl: 'Projects/Robot/Robot.html',
    controller: 'ViewCtrl_Robot'
  });
}])

.controller('ViewCtrl_Robot', ['$scope', '$location', '$anchorScroll',
    function($scope, $location, $anchorScroll) {
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
    $scope.gotoChpt23 = function () {
        $location.hash('chpt23');
        $anchorScroll();
    }
    $scope.gotoChpt24 = function () {
        $location.hash('chpt24');
        $anchorScroll();
    }
    $scope.gotoChpt25 = function () {
        $location.hash('chpt25');
        $anchorScroll();
    }
    $scope.gotoChpt26 = function () {
        $location.hash('chpt26');
        $anchorScroll();
    }
    $scope.gotoChpt27 = function () {
        $location.hash('chpt27');
        $anchorScroll();
    }
    $scope.gotoChpt28 = function () {
        $location.hash('chpt28');
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
    $scope.gotoChpt36 = function () {
        $location.hash('chpt36');
        $anchorScroll();
    }
    $scope.gotoChpt37 = function () {
        $location.hash('chpt37');
        $anchorScroll();
    }
    $scope.gotoChpt38 = function () {
        $location.hash('chpt38');
        $anchorScroll();
    }

}]);