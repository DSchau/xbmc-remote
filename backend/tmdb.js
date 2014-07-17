var tmdb = require('moviedb')('437f4abffe164915bfae0014a9ed39a3');
var output = require('./output');

var apiMapper = {
	nowplaying: function() {
		tmdb.miscNowPlaying(function(error, result) {
			console.log(error);
		});
	}
};

var api = {
	findMovie: function(response, query) {
		tmdb.searchMovie({ query: query }, function(error, result) {
			if ( result && result.results.length ) {
				var movieId = result.results[0].id;
				tmdb.movieInfo({ id: movieId }, function(errorById, resultById) {
					output.write(errorById, resultById, response);
				});
			} else {
				output.write(error, result, response);
			}
		});
	},
	findMovieById: function(response, id) {
		tmdb.movieInfo({ id: id }, function(error, result) {
			output.write(error, result, response);
		});
	},
	lookup: function(response, keyword) {
		console.log(keyword.toLowerCase(), apiMapper[keyword.toLowerCase()]);
		if ( typeof apiMapper[keyword.toLowerCase()] === 'function' ) {
			apiMapper[keyword.toLowerCase()]();
		} else {
			if ( isNaN(keyword) ) {
				this.findMovie(response, keyword);
			} else {
				this.findMovieById(response, keyword);
			}
		}
	}
};

exports.api = api;