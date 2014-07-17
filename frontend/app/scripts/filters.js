'use strict';

angular.module('xbmcRemote.filters', [])
.filter('chunk', function() {
  return function(arr, count) {
    var chunk = count || 3,
      returnArr = [];
    for( var i = 0; i < arr.length; i = i + chunk ) {
      returnArr.push(i);
    }
    return returnArr;
  };
})
.filter('stars', function() {
  return function(rating) {
    var stars = {
      0: '☆☆☆☆☆',
      1: '★☆☆☆☆',
      2: '★★☆☆☆',
      3: '★★★☆☆',
      4: '★★★★☆',
      5: '★★★★★'
    };
    return stars[ Math.round(rating/2) ];
	};
})
.filter('numToWord', function() {
  var numMap = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen'
  };
  return function(input) {
    var value = input || '';
    return numMap[value] || input;
  };
})
.filter('typeof', function() {
  return function(input) {
    return typeof input;
  };
});