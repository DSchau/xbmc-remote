'use strict';

angular.module('xbmcRemote.controllers')
.config(function($routeProvider) {
  $routeProvider.when('/library', {
    templateUrl: 'views/main.html',
    controller: 'VideoLibraryCtrl'
  });
})
.controller('VideoLibraryCtrl', function ($scope, $resource, commandService, xbmcService, services) {
  var service = xbmcService;

  $scope.videoLibrary = services.getVideoLibraryServices;

  $scope.videoAction = function(action) {
    service.post( commandService.VideoLibrary(action) ).then(function(result) {
      $scope.data = result.data;
    });
  };
});