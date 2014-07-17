var output = require('./output');

var outputError = function(response, status) {
	output.respond(status, {
		status: status,
		error: true
	}, response);
};

exports.error = outputError;