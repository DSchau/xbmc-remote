var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {
	'series': requestHandlers.getTVShow,
	'movie': requestHandlers.getMovie
};

server.start(router.route, handle);
