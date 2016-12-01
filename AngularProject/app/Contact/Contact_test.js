'use strict';

describe('myApp.ContactView module', function() {

  beforeEach(module('myApp.ContactView'));

  describe('Contact view controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var viewCtrl_Contact = $controller('ViewCtrl_Contact');
      expect(viewCtrl_Contact).toBeDefined();
    }));

  });
});