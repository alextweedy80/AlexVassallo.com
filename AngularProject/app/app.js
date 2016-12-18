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

   
.controller("appCtrl", ["$scope", function($scope) {

}]);  
 
'use strict';

angular.module('myApp.AboutView', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

    var _templateUrl = "About/About.html";
    var _controller = 'ViewCtrl_About';
    if (Modernizr.preserve3d) {
        // supported
    } else {
        // not-supported
        _templateUrl = "About2/About2.html";
        _controller = 'ViewCtrl_About2';
    }
    $routeProvider.when('/About', {
        templateUrl: _templateUrl,
        controller: _controller,
    });
}])

.controller('ViewCtrl_About', [function ($scope) {


var events = new Events();
events.add = function (obj) {
    obj.events = {};
}
events.implement = function (fn) {
    fn.prototype = Object.create(Events.prototype);
}

function Events() {
    this.events = {};
}
Events.prototype.on = function (name, fn) {
    var events = this.events[name];
    if (events == undefined) {
        this.events[name] = [fn];
        this.emit('event:on', fn);
    } else {
        if (events.indexOf(fn) == -1) {
            events.push(fn);
            this.emit('event:on', fn);
        }
    }
    return this;
}
Events.prototype.once = function (name, fn) {
    var events = this.events[name];
    fn.once = true;
    if (!events) {
        this.events[name] = [fn];
        this.emit('event:once', fn);
    } else {
        if (events.indexOf(fn) == -1) {
            events.push(fn);
            this.emit('event:once', fn);
        }
    }
    return this;
}
Events.prototype.emit = function (name, args) {
    var events = this.events[name];
    if (events) {
        var i = events.length;
        while (i--) {
            if (events[i]) {
                events[i].call(this, args);
                if (events[i].once) {
                    delete events[i];
                }
            }
        }
    }
    return this;
}
Events.prototype.unbind = function (name, fn) {
    if (name) {
        var events = this.events[name];
        if (events) {
            if (fn) {
                var i = events.indexOf(fn);
                if (i != -1) {
                    delete events[i];
                }
            } else {
                delete this.events[name];
            }
        }
    } else {
        delete this.events;
        this.events = {};
    }
    return this;
}

var userPrefix;

var prefix = (function () {
    var styles = window.getComputedStyle(document.documentElement, ''),
      pre = (Array.prototype.slice
        .call(styles)
        .join('')
        .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
      )[1],
      dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
    userPrefix = {
        dom: dom,
        lowercase: pre,
        css: '-' + pre + '-',
        js: pre[0].toUpperCase() + pre.substr(1)
    };
})();

function bindEvent(element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    } else {
        element.attachEvent('on' + type, handler);
    }
}

function Viewport(data) {
    events.add(this);

    var self = this;

    this.element = data.element;
    this.fps = data.fps;
    this.sensivity = data.sensivity;
    this.sensivityFade = data.sensivityFade;
    this.touchSensivity = data.touchSensivity;
    this.speed = data.speed;

    this.lastX = 0;
    this.lastY = 0;
    this.mouseX = 0;
    this.mouseY = 0;
    this.distanceX = 0;
    this.distanceY = 0;
    this.positionX = 1122;
    this.positionY = 136;
    this.torqueX = 0;
    this.torqueY = 0;

    this.down = false;
    this.upsideDown = false;

    this.previousPositionX = 0;
    this.previousPositionY = 0;

    this.currentSide = 0;
    this.calculatedSide = 0;


    bindEvent(document, 'mousedown', function () {
        self.down = true;
    });

    bindEvent(document, 'mouseup', function () {
        self.down = false;
    });

    bindEvent(document, 'keyup', function () {
        self.down = false;
    });

    bindEvent(document, 'mousemove', function (e) {
        self.mouseX = e.pageX;
        self.mouseY = e.pageY;
    });

    bindEvent(document, 'touchstart', function (e) {

        self.down = true;
        e.touches ? e = e.touches[0] : null;
        self.mouseX = e.pageX / self.touchSensivity;
        self.mouseY = e.pageY / self.touchSensivity;
        self.lastX = self.mouseX;
        self.lastY = self.mouseY;
    });

    bindEvent(document, 'touchmove', function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        if (e.touches.length == 1) {

            e.touches ? e = e.touches[0] : null;

            self.mouseX = e.pageX / self.touchSensivity;
            self.mouseY = e.pageY / self.touchSensivity;

        }
    });

    bindEvent(document, 'touchend', function (e) {
        self.down = false;
    });

    setInterval(this.animate.bind(this), this.fps);

}
events.implement(Viewport);
Viewport.prototype.animate = function () {

    this.distanceX = (this.mouseX - this.lastX);
    this.distanceY = (this.mouseY - this.lastY);

    this.lastX = this.mouseX;
    this.lastY = this.mouseY;

    if (this.down) {
        this.torqueX = this.torqueX * this.sensivityFade + (this.distanceX * this.speed - this.torqueX) * this.sensivity;
        this.torqueY = this.torqueY * this.sensivityFade + (this.distanceY * this.speed - this.torqueY) * this.sensivity;
    }

    if (Math.abs(this.torqueX) > 1.0 || Math.abs(this.torqueY) > 1.0) {
        if (!this.down) {
            this.torqueX *= this.sensivityFade;
            this.torqueY *= this.sensivityFade;
        }

        this.positionY -= this.torqueY;

        if (this.positionY > 360) {
            this.positionY -= 360;
        } else if (this.positionY < 0) {
            this.positionY += 360;
        }

        if (this.positionY > 90 && this.positionY < 270) {
            this.positionX -= this.torqueX;

            if (!this.upsideDown) {
                this.upsideDown = true;
                this.emit('upsideDown', { upsideDown: this.upsideDown });
            }

        } else {

            this.positionX += this.torqueX;

            if (this.upsideDown) {
                this.upsideDown = false;
                this.emit('upsideDown', { upsideDown: this.upsideDown });
            }
        }

        if (this.positionX > 360) {
            this.positionX -= 360;
        } else if (this.positionX < 0) {
            this.positionX += 360;
        }

        if (!(this.positionY >= 46 && this.positionY <= 130) && !(this.positionY >= 220 && this.positionY <= 308)) {
            if (this.upsideDown) {
                if (this.positionX >= 42 && this.positionX <= 130) {
                    this.calculatedSide = 3;
                } else if (this.positionX >= 131 && this.positionX <= 223) {
                    this.calculatedSide = 2;
                } else if (this.positionX >= 224 && this.positionX <= 314) {
                    this.calculatedSide = 5;
                } else {
                    this.calculatedSide = 4;
                }
            } else {
                if (this.positionX >= 42 && this.positionX <= 130) {
                    this.calculatedSide = 5;
                } else if (this.positionX >= 131 && this.positionX <= 223) {
                    this.calculatedSide = 4;
                } else if (this.positionX >= 224 && this.positionX <= 314) {
                    this.calculatedSide = 3;
                } else {
                    this.calculatedSide = 2;
                }
            }
        } else {
            if (this.positionY >= 46 && this.positionY <= 130) {
                this.calculatedSide = 6;
            }

            if (this.positionY >= 220 && this.positionY <= 308) {
                this.calculatedSide = 1;
            }
        }

        if (this.calculatedSide !== this.currentSide) {
            this.currentSide = this.calculatedSide;
            this.emit('sideChange');
        }

    }

    this.element.style[userPrefix.js + 'Transform'] = 'rotateX(' + this.positionY + 'deg) rotateY(' + this.positionX + 'deg)';

    if (this.positionY != this.previousPositionY || this.positionX != this.previousPositionX) {
        this.previousPositionY = this.positionY;
        this.previousPositionX = this.positionX;

        this.emit('rotate');

    }

}
var viewport = new Viewport({
    element: document.getElementsByClassName('cube')[0],
    fps: 20,
    sensivity: .2,
    sensivityFade: .93,
    speed: 1,
    touchSensivity: 2.0
});

function Cube(data) {
    var self = this;

    this.element = data.element;
    this.sides = this.element.getElementsByClassName('side');

    this.viewport = data.viewport;
    this.viewport.on('rotate', function () {
        self.rotateSides();
    });
    this.viewport.on('upsideDown', function (obj) {
        self.upsideDown(obj);
    });
    this.viewport.on('sideChange', function () {
        self.sideChange();
    });
}
Cube.prototype.rotateSides = function () {
    var viewport = this.viewport;
    if (viewport.positionY > 90 && viewport.positionY < 270) {
        this.sides[0].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] = 'rotate(' + (viewport.positionX + viewport.torqueX) + 'deg)';
        this.sides[5].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] = 'rotate(' + -(viewport.positionX + 180 + viewport.torqueX) + 'deg)';
    } else {
        this.sides[0].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] = 'rotate(' + (viewport.positionX - viewport.torqueX) + 'deg)';
        this.sides[5].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] = 'rotate(' + -(viewport.positionX + 180 - viewport.torqueX) + 'deg)';
    }
}
Cube.prototype.upsideDown = function (obj) {

    var deg = (obj.upsideDown == true) ? '180deg' : '0deg';
    var i = 5;

    while (i > 0 && --i) {
        this.sides[i].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] = 'rotate(' + deg + ')';
    }

}
Cube.prototype.sideChange = function () {

    for (var i = 0; i < this.sides.length; ++i) {
        this.sides[i].getElementsByClassName('cube-image')[0].className = 'cube-image';
    }

    this.sides[this.viewport.currentSide - 1].getElementsByClassName('cube-image')[0].className = 'cube-image active';

}

new Cube({
    viewport: viewport,
    element: document.getElementsByClassName('cube')[0]
});


}]);

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

angular.module('myApp.ResumeAwardsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/ResumeAwards', {
        templateUrl: 'ResumeAwards/ResumeAwards.html',
        controller: 'ViewCtrl_ResumeAwards',
  });
}])

.controller('ViewCtrl_ResumeAwards', [function ($scope) {

}]);
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

angular.module('myApp.HeartRateMonitorView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Projects/HeartRateMonitor', {
    templateUrl: 'Projects/HeartRateMonitor/HeartRateMonitor.html',
    controller: 'ViewCtrl_HeartRateMonitor'

  });
}])

.controller('ViewCtrl_HeartRateMonitor', ['$scope', '$location', '$anchorScroll',
    function ($scope, $location, $anchorScroll) {
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

    }]);
'use strict';

angular.module('myApp.IraqAirplaneView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Projects/IraqAirplane', {
        templateUrl: 'Projects/IraqAirplane/IraqAirplane.html',
        controller: 'ViewCtrl_IraqAirplane'
  });
}])

.controller('ViewCtrl_IraqAirplane', ['$scope', '$location', '$anchorScroll',
    function ($scope, $location, $anchorScroll) {
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
        $scope.gotoChpt39 = function () {
            $location.hash('chpt39');
            $anchorScroll();
        }
    }]);
'use strict';

angular.module('myApp.MotorTesterView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Projects/MotorTester', {
        templateUrl: 'Projects/MotorTester/MotorTester.html',
        controller: 'ViewCtrl_MotorTester'
  });
}])


.controller('ViewCtrl_MotorTester', ['$scope', '$location', '$anchorScroll',
    function ($scope, $location, $anchorScroll) {
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
    }]);
'use strict';

angular.module('myApp.obd2View', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Projects/obd2', {
        templateUrl: 'Projects/obd2/obd2.html',
        controller: 'ViewCtrl_obd2'
  });
}])

.controller('ViewCtrl_obd2', ['$scope', '$location', '$anchorScroll',
    function ($scope, $location, $anchorScroll) {
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

    }]);
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
'use strict';

angular.module('myApp.OpticalReceiverView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Projects/OpticalReceiver', {
        templateUrl: 'Projects/OpticalReceiver/OpticalReceiver.html',
        controller: 'ViewCtrl_OpticalReceiver'
  });
}])

.controller('ViewCtrl_OpticalReceiver', ['$scope', '$location', '$anchorScroll',
    function ($scope, $location, $anchorScroll) {
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
        $scope.gotoChpt4 = function () {
            $location.hash('chpt4');
            $anchorScroll();
        }


    }]);