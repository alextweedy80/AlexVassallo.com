'use strict';

angular.module('myApp.ResumeExperienceView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/ResumeExperience', {
        templateUrl: 'ResumeExperience/ResumeExperience.html',
        controller: 'ViewCtrl_ResumeExperience',
  });
}])

.controller('ViewCtrl_ResumeExperience', [function ($scope) {

}]);