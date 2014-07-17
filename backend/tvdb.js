var TVDBClient = require('node-tvdb'),
  client = new TVDBClient('70F577ABF087FF51');

var output = require('./output');

var api = {
	getSeries: function(response, showName) {
		client.getSeries(showName, function(error, result) {
			result = result || [{seriesid: ''}];
			var id = result.seriesid || result[0].seriesid || '';
			if ( id ) {
				client.getSeriesById(id, function(error, result) {
					output.write(error, result, response);
				});
			} else {
				output.write(error, result, response);
			}
		});
	},
	getSeriesById: function(response, showId) {
		client.getSeriesById(showId, function(error, result) {
			output.write(error, result, response);
		});
	},
	getLanguage: function(response) {
		output.respond(200, { language: client.getLanguage() }, response);
	},
	getTime: function(response) {
		client.getTime(function(error, result) {
			output.write(error, result, response);
		});
	},
	getSeriesAllById: function(response, showId) {
		client.getSeriesAllById(showId, function(error, result) {
			output.write(error, result, response);
		});
	},
	getActors: function(response, showId) {
		client.getActors(showId, function(error, result) {
			output.write(error, result, response);
		});
	},
	getBanners: function(response, showId) {
		client.getBanners(showId, function(error, result) {
			output.write(error, result, response);
		});
	}
};

exports.api = api;