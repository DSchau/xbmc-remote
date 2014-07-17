'use strict';

angular.module('xbmcRemote.controllers')
.config(function($routeProvider) {
  $routeProvider.when('/movies', {
    templateUrl: 'views/movies.tpl.html',
    controller: 'moviesAllCtrl',
    resolve: {
      xbmcMovies: function($q, xbmcService, getMovies, tmdb) {
        var defer = $q.defer();
        xbmcService.post(getMovies).then(function(result) {
          var movies = result.data.result.movies;
          tmdb.getMovies(movies);
          defer.resolve(movies);
        });
        return defer.promise;
      }
    }
  });
})
.controller('moviesAllCtrl', function ($scope, tmdb, matchmedia) {
  $scope.movies = [];
  $scope.limits = {};

  $scope.overviewLimit = 250;
  $scope.spliceLength = 3;

  $scope.movies = tmdb.movies;

  $scope.increaseLimit = function(limit, movie) {
    $scope.limits[movie] = limit;
  };

  matchmedia.onTablet(function(mediaQueryList) {
    $scope.spliceLength = mediaQueryList.matches ? 2 : 3;
  });

});