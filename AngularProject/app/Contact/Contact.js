'use strict';

angular.module('myApp.ContactView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Contact', {
    templateUrl: 'Contact/Contact.html',
    controller: 'ViewCtrl_Contact',
  });
}])


.controller('ViewCtrl_Contact', ['$scope', '$http', function ($scope, $http) {
    $scope.formData = {};
    $scope.mailSent = false;
    $scope.mailFail = false;
    $scope.test;
    $scope.processForm = function () {

        var data = {
            'name': $scope.formData.name,
            'email': $scope.formData.email,
            'msg': $scope.formData.msg
        };

        var config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }

        $http({
            method: 'POST',
            url: 'php/tester.php',
            data: JSON.stringify(data),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        })
        .success(function (data) {
            console.log(data);
            $scope.message = data['message'];


            if (data['success'] == true) {
                // if not successful, bind errors to error variables
                $scope.mailSent = true;
                $scope.mailFail = false;
            } else {
                // if successful, bind success message to message
                $scope.mailFail = true;
                
            }
        })
          .error(function (data) {
              $scope.message = 'http post error in Contact.js';
          });
    };

}]);

