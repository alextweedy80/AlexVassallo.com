'use strict';

angular.module('myApp.ResumeAwardsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/ResumeAwards', {
        templateUrl: 'ResumeAwards/ResumeAwards.html',
        controller: 'ViewCtrl_ResumeAwards',
  });
}])

.controller('ViewCtrl_ResumeAwards', [function ($scope) {

}]);