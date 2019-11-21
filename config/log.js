const bunyan = require("bunyan");

let log = bunyan.createLogger({
	name: "simple-web-token-authentication",
	level: "debug",
	serializers: {
		err: bunyan.stdSerializers.err
	}
});

module.exports = log;