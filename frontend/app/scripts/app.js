'use strict';

angular.module('xbmcRemote', [
  'ngResource',
  'ngRoute',
  'ngAnimate',
  'matchmedia-ng',
//  'angular-loading-bar',
  'xbmcRemote.filters',
  'xbmcRemote.services',
  'xbmcRemote.services.tvdb',
  'xbmcRemote.services.tmdb',
  'xbmcRemote.directives',
  'xbmcRemote.controllers'
])
.config(function($httpProvider) {
  $httpProvider.defaults.cache = true;
});
