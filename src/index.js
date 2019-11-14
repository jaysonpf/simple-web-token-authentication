const restify = require("restify");
const bunyan = require("bunyan");
const singIn = require("./modules/authentication/routes/sign-in");
const singOut = require("./modules/authentication/routes/sign-out");
const verify = require("./modules/authentication/routes/verify");
const healthCheck = require("./modules/authentication/routes/health-check");

let log = bunyan.createLogger({
	name: "simple-web-token-authentication",
	level: "debug",
	serializers: {
		err: bunyan.stdSerializers.err
	}
});

log.info("starting server... ");

let serverOptions = {
	name: "simple-web-token-authentication",
	port: 8085,
	log: log
};
let server = restify.createServer(serverOptions);
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser({
	mapParams: false
}));

server.post("sign-in", singIn);
server.post("sign-out", singOut);
server.post("verify", verify);
server.get("health-check", healthCheck);


server.listen(serverOptions.port, function () {
	log.info("%s listening at %s", server.name, server.url);
});
