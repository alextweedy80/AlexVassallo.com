'use strict';

var showProjects = true;

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMessages',
  'myApp.HomeView',
  'myApp.ContactView',
  'myApp.AboutView',
  'myApp.About2View',
  'myApp.ResumeSkillsView',
  'myApp.ResumeEducationView',
  'myApp.ResumeExperienceView',
  'myApp.ResumeAwardsView',
  'myApp.ProjectsView',
  'myApp.RobotView',
  'myApp.MotorTesterView',
  'myApp.HeartRateMonitorView',
  'myApp.obd2View',
  'myApp.IraqAirplaneView',
  'myApp.OpticalReceiverView',
  'myApp.version'
  
])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/HomeView'});
}])

   
.controller("appCtrl", function($scope) {

});  
 