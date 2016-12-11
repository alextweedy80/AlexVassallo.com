'use strict';

angular.module('myApp.ContactView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Contact', {
    templateUrl: 'Contact/Contact.html',
    controller: 'ViewCtrl_Contact',
  });
}])

.controller('ViewCtrl_Contact', [function ($scope) {

}]);

