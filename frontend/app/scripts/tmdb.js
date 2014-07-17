'use strict';

angular.module('xbmcRemote.services.tmdb', [])
.constant('TMDB_URL', '/movie/')
.constant('getMovies', {
  jsonrpc: '2.0',
  id: 1,
  method: 'VideoLibrary.getMovies'
})
.factory('tmdb', function($http, TMDB_URL) {
  var movies = [];
  return {
    getMovies: function(movieArr) {
      angular.forEach(movieArr, function(movie) {
        $http.get(TMDB_URL + movie.label).then(function(result) {
          movies.push(result.data);
        });
      });
    },
    getMovie: function(movie) {
      return $http.get(TMDB_URL + movie);
    },
    movies: movies
  };
});