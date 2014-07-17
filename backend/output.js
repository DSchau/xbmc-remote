var writeResponse = function(status, objToWrite, response) {
	response.writeHead(status, { 'Content-Type': 'application/json' });
	response.write(JSON.stringify( objToWrite) );
	response.end();
};

var output = function(error, result, response) {
	if ( error ) {
		writeResponse(500, { error: true, status: 500 }, response);
		return;
	}
	writeResponse(200, result, response);
};

exports.write = output;
exports.respond = writeResponse;