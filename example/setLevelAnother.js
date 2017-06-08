"use strict";
var logger = require('tracer-debug').colorConsole();

exports.hi = function() {
	logger.log('hello');
	logger.trace('hello', 'world');
	logger.debug('hello %s', 'world', 123);
	logger.warn('hello %s', 'world', 123);
	logger.error('hello %s', 'world', 123);
}
