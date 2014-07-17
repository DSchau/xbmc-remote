var tvdb = require('./tvdb').api;
var movieDb = require('./tmdb').api;

var getShowDetails = function(response, show) {
	if ( isNaN(show) ) {
		tvdb.getSeries(response, show);
	} else {
		tvdb.getSeriesById(response, show);
	}
};

var getMovie = function(response, keyword) {
	movieDb.lookup(response, keyword);
};

exports.getTVShow = getShowDetails;
exports.getMovie = getMovie;
