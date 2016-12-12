'use strict';

angular.module('myApp.ResumeSkillsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/ResumeSkills', {
        templateUrl: 'ResumeSkills/ResumeSkills.html',
        controller: 'ViewCtrl_ResumeSkills',
  });
}])

.controller('ViewCtrl_ResumeSkills', [function ($scope) {

}]);