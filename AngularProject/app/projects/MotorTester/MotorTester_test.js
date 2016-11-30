'use strict';

describe('myApp.MotorTesterView module', function () {

    beforeEach(module('myApp.MotorTesterView'));

  describe('MotorTester view controller', function () {

    it('should ....', inject(function($controller) {
      //spec body
        var viewCtrl_MotorTester = $controller('ViewCtrl_MotorTester');
        expect(viewCtrl_MotorTester).toBeDefined();
    }));

  });
});