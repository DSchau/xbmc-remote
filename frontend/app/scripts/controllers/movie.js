'use strict';

angular.module('xbmcRemote.controllers')
.config(function($routeProvider) {
  $routeProvider.when('/movie/:movieId', {
    templateUrl: 'views/movie.tpl.html',
    controller: 'moviesCtrl',
    resolve: {
      movie: function(tmdb, $q, $route) {
        var deferred = $q.defer();
        tmdb.getMovie($route.current.params.movieId).then(function(result) {
          deferred.resolve(result.data);
        });
        return deferred.promise;
      }
    }
  });
})
.controller('moviesCtrl', function ($scope, movie) {
  $scope.movie = movie;
});