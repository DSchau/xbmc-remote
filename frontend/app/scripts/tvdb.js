'use strict';

angular.module('xbmcRemote.services.tvdb', [])
.constant('TVDB_URL', '/series/')
.constant('getShows', {
  jsonrpc: '2.0',
  id: 1,
  method: 'VideoLibrary.GetTVShows'
})
.factory('tvdb', function($http, TVDB_URL) {
  var self = this;
  this.getShow = function(series) {
    return $http.get(TVDB_URL + series);
  };

  var seriesList = [];

  return {
    populateShowList: function(arr) {
      angular.forEach(arr, function(show) {
        self.getShow(show.label).then(function(result) {
          if ( result && result.data && result.data.length ) {
            result.data[0].xbmcId = show.tvshowid;
            seriesList.push(result.data[0]);
          } else {
            result.data.xbmcId = show.tvshowid;
            seriesList.push(result.data);
          }
        });
      });
    },
    getShow: function(series) {
      return self.getShow(series);
    },
    getXbmcId: function(seriesId) {
      return _.findWhere(seriesList, { id: seriesId });
    },
    seriesList: seriesList
  };
});
