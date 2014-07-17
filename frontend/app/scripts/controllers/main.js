'use strict';

angular.module('xbmcRemote.controllers', [])
.config(function($routeProvider) {
  $routeProvider.when('/main', {
      templateUrl: 'partials/main.tpl.html',
      controller: 'MainCtrl'
    }).otherwise({
      templateUrl: 'partials/main.tpl.html',
      controller: 'MainCtrl'
    });
})
.controller('MainCtrl', function ($scope, $resource, commandService, xbmcService, services) {
  $scope.videoLibrary = services.getVideoLibraryServices;

  $scope.videoAction = function(action) {
    $scope.data = xbmcService.post( commandService.VideoLibrary(action) );
  };
});
