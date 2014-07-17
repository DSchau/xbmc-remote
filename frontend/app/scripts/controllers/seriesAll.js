'use strict';

angular.module('xbmcRemote.controllers')
.config(function($routeProvider) {
  $routeProvider.when('/series', {
    templateUrl: 'views/seriesAll.tpl.html',
    controller: 'seriesAllCtrl',
    resolve: {
      series: function(xbmcService, getShows, tvdb, $q) {
        var defer = $q.defer();

        xbmcService.post(getShows).then(function(result) {
          var shows = result.data.result.tvshows;
          tvdb.populateShowList(shows); // allows for async. population of seriesData
          defer.resolve( shows );
        });

        return defer.promise;
      }
    }
  });
})
.controller('seriesAllCtrl', function ($scope, tvdb, matchmedia) {
  $scope.overviewLimit = 500;
  $scope.limits = {};
  $scope.spliceLength = 3;

  $scope.tvShows = tvdb.seriesList;

  $scope.increaseLimit = function(limit, showName) {
    $scope.limits[showName] = limit;
  };

  matchmedia.onTablet(function(mediaQueryList) {
    $scope.spliceLength = mediaQueryList.matches ? 2 : 3;
  });
});