'use strict';

describe('myApp.AboutView module', function () {

    beforeEach(module('myApp.AboutView'));

    describe('About view controller', function () {

    it('should ....', inject(function($controller) {
      //spec body
        var viewCtrl_About = $controller('ViewCtrl_About');
        expect(viewCtrl_About).toBeDefined();
    }));

  });
});