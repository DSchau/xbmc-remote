'use strict';

angular.module('xbmcRemote.services', [])
.constant('JSONRPC_URL', '/jsonrpc')
.factory('xbmcService', function($http, JSONRPC_URL) {
  return {
    post: function(config) {
      return $http.post(JSONRPC_URL, config);
    }
  };
})
.factory('commandService', function() {
  var paramDefaults = {
    jsonrpc: '2.0',
    id: 1
  };
  return {
    Addons: function(action) {
      return action;
    },
    Application: function(action) {
      return action;
    },
    AudioLibrary: function(action) {
      return action;
    },
    Files: function(action) {
      return action;
    },
    GUI: function(action) {
      return action;
    },
    Input: function(action) {
      return action;
    },
    JSONRPC: function(action) {
      return action;
    },
    Player: function(action) {
      var localDefaults = paramDefaults;
      localDefaults.method = 'Player.' + action;
      return localDefaults;
    },
    Playlist: function(action) {
      return action;
    },
    PVR: function(action) {
      return action;
    },
    System: function(action) {
      return action;
    },
    VideoLibrary: function(action) {
      var localDefaults = paramDefaults;
      localDefaults.method = 'VideoLibrary.' + action;
      return localDefaults;
    },
    XBMC: function(action) {
      return action;
    }
  };
})
.factory('services', function() {
  return {
    getVideoLibraryServices: [
      { display: 'Clean', action: 'Clean' },
      { display: 'Export', action: 'Export' },
      { display: 'Get Ep. Details', action: 'GetEpisodeDetails' },
      { display: 'Get Episodes', action: 'GetEpisodes' },
      { display: 'Get Genres', action: 'GetGenres' },
      { display: 'Get Movie Details', action: 'GetMovieDetails' },
      { display: 'Get Movie Details (Set)', action: 'GetMovieSetDetails' },
      { display: 'Get Movie Sets', action: 'GetMovieSets' },
      { display: 'Get Movies', action: 'GetMovies' },
      { display: 'Get Music Video Details', action: 'GetMusicVideoDetails' },
      { display: 'Get Music Videos', action: 'GetMusicVideos' },
      { display: 'Get Recent Eps.', action: 'GetRecentlyAddedEpisodes' },
      { display: 'Get Recent Movies', action: 'GetRecentlyAddedMovies' },
      { display: 'Get Recent Music Videos', action: 'GetRecentlyAddedMusicVideos' },
      { display: 'Get Seasons', action: 'GetSeasons' },
      { display: 'Get TV Show Details', action: 'GetTVShowDetails' },
      { display: 'Get TV Shows', action: 'GetTVShows' },
      { display: 'Remove Episode', action: 'RemoveEpisode', danger: true },
      { display: 'Remove Movie', action: 'RemoveMovie', danger: true },
      { display: 'Remove Music Video', action: 'RemoveMusicVideo', danger: true },
      { display: 'Remove TV Show', action: 'RemoveTVShow', danger: true },
      { display: 'Scan', action: 'Scan' },
      { display: 'Set Episode Details', action: 'SetEpisodeDetails' },
      { display: 'Set Movie Details', action: 'SetMovieDetails' },
      { display: 'Set Music Video Details', action: 'SetMusicVideoDetails' },
      { display: 'Set TV Show Details', action: 'SetTVShowDetails' }
    ]
  };
});