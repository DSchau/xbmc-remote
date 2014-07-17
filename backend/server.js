var http = require('http'),
	url = require('url'),
	timeStamp = require('util').log;

function start(route, handle) {
	function onRequest(request, response) {
		var pathName = url.parse(request.url).pathname;
		timeStamp('Request for ' + pathName + ' received.');
		
		route(handle, pathName, response);
	}
	http.createServer(onRequest).listen(8888);
	console.info('Server has started.');
}

exports.start = start;
