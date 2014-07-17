function route(handle, pathName, response) {
	var splitPath = pathName.split('/'),
		mainPath = splitPath[1];
  if ( typeof handle[mainPath] === 'function' ) {
  	if ( mainPath === 'movie' ) {
  		handle[mainPath](response, pathName.replace(new RegExp('/' + mainPath + '/?'), ''));
  	} else {
  		handle[mainPath](response, splitPath[2] || '');
  	}
  } else {
    console.log('No request handler found for ' + pathName);
    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify( { status: 404, error: 'No request handler found for ' + pathName } ));
    response.end();
  }
}

exports.route = route;
