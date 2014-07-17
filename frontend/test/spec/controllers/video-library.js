'use strict';

describe('Controller: VideoLibraryCtrl', function () {

  // load the controller's module
  beforeEach(module('xbmcRemoteApp'));

  var VideoLibraryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideoLibraryCtrl = $controller('VideoLibraryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
