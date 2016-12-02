'use strict';

var showProjects = true;

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.HomeView',
  'myApp.ContactView',
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

   
.controller("appCtrl", ["$scope", function($scope) {

}]);  
 
'use strict';

angular.module('myApp.ContactView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Contact', {
    templateUrl: 'Contact/Contact.html',
    controller: 'ViewCtrl_Contact',
  });
}])

.controller('ViewCtrl_Contact', [function ($scope) {
    showProjects = true;
}]);
'use strict';

angular.module('myApp.HomeView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/HomeView', {
    templateUrl: 'HomeView/HomeView.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.customStyle = {};
    $scope.customStyle.mainClass = "HomeViewMain";
    $scope.IsProject = true;
}]);
'use strict';

angular.module('myApp.ProjectsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Projects', {
    templateUrl: 'Projects/Projects.html',
    controller: 'ViewCtrl_Projects'
  });
}])

.controller('ViewCtrl_Projects', [function ($scope, $rootScope) {

}]);


'use strict';

angular.module('myApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);

'use strict';

angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);

'use strict';

angular.module('myApp.version', [
  'myApp.version.interpolate-filter',
  'myApp.version.version-directive'
])

.value('version', '0.1');

'use strict';

angular.module('myApp.IraqAirplaneView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Projects/IraqAirplane', {
        templateUrl: 'projects/IraqAirplane/IraqAirplane.html',
        controller: 'ViewCtrl_IraqAirplane'
  });
}])

.controller('ViewCtrl_IraqAirplane', [function () {

}]);
'use strict';

angular.module('myApp.MotorTesterView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Projects/MotorTester', {
        templateUrl: 'projects/MotorTester/MotorTester.html',
        controller: 'ViewCtrl_MotorTester'
  });
}])

.controller('ViewCtrl_MotorTester', [function () {

}]);
'use strict';

angular.module('myApp.obd2View', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Projects/obd2', {
        templateUrl: 'projects/obd2/obd2.html',
        controller: 'ViewCtrl_obd2'
  });
}])

.controller('ViewCtrl_obd2', [function () {

}]);
'use strict';

angular.module('myApp.OpticalReceiverView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Projects/OpticalReceiver', {
        templateUrl: 'projects/OpticalReceiver/OpticalReceiver.html',
        controller: 'ViewCtrl_OpticalReceiver'
  });
}])

.controller('ViewCtrl_OpticalReceiver', [function () {

}]);
'use strict';

angular.module('myApp.RobotView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Projects/Robot', {
    templateUrl: 'Projects/Robot/Robot.html',
    controller: 'ViewCtrl_Robot'
  });
}])

.controller('ViewCtrl_Robot', [function() {

}]);
'use strict';

angular.module('myApp.HeartRateMonitorView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Projects/HeartRateMonitor', {
    templateUrl: 'projects/HeartRateMonitor/HeartRateMonitor.html',
    controller: 'ViewCtrl_HeartRateMonitor'

  });
}])

.controller('ViewCtrl_HeartRateMonitor', [function ($scope) {

}]);