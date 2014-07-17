'use strict';

angular.module('xbmcRemote.controllers')
.config(function($routeProvider) {
  $routeProvider.when('/series/:showId', {
    templateUrl: 'views/series.tpl.html',
    controller: 'seriesCtrl',
    resolve: {
      series: function(tvdb, $route) {
        return tvdb.getShow($route.current.params.showId).then(function(result) {
          return result.data;
        });
      },
      id: function(tvdb, $route) {
        var seriesObj = tvdb.getXbmcId($route.current.params.showId);
        if ( seriesObj ) {
          return seriesObj.xbmcId;
        }
        return null;
      }
    }
  });
})
.factory('seriesService', function(xbmcService, getShows) {
  return {
    getEpisodes: function(id) {
      var config = getShows;
      config.method = 'VideoLibrary.GetEpisodes';
      config.params = { tvshowid: id };
      return xbmcService.post(config);
    },
    getSeasons: function(arr) {
      return _.groupBy(arr, function(ep) {
        if ( ep.label.charAt(1) !== 'x' ) {
          return ep.label.substr(0,2);
        }
        return ep.label.charAt(0);
      });
    },
    playEpisode: function(epId) {
      var config = getShows;
      config.method = 'Player.Open';
      config.params = { item: { episodeid: epId } };
      return xbmcService.post(config);
    }
  };
})
.controller('seriesCtrl', function ($scope, series, id, seriesService) {
  $scope.series = series;
  seriesService.getEpisodes(id).then(function(result) {
    $scope.episodes = seriesService.getSeasons(result.data.result.episodes);
  });

  $scope.playEpisode = function(epId) {
    seriesService.playEpisode(epId).then(function(result) {
      console.log(result.data);
    });
  };
});