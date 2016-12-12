'use strict';

angular.module('myApp.ResumeEducationView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/ResumeEducation', {
        templateUrl: 'ResumeEducation/ResumeEducation.html',
        controller: 'ViewCtrl_ResumeEducation',
  });
}])

.controller('ViewCtrl_ResumeEducation', [function ($scope) {

}]);