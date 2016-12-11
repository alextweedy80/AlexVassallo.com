'use strict';

angular.module('myApp.About2View', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/About2', {
    templateUrl: 'About2/About2.html',
    controller: 'ViewCtrl_About2',
  });
}])

.controller('ViewCtrl_About2', [function ($scope) {

}]);

