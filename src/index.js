const restify = require("restify");
const bunyan = require("bunyan");
const mongoose = require("mongoose");
const singIn = require("./modules/authentication/routes/sign-in");
const singOut = require("./modules/authentication/routes/sign-out");
const verify = require("./modules/authentication/routes/verify");

let log = bunyan.createLogger({ name: "simple-web-token-authentication", level: "debug" });

log.info("starting server... ");


mongoose.connect("mongodb://localhost/test", err => {
	if (err) {
		log.error("error establishing a database connection");
		process.exit(1);
	}

	let serverOptions = {
		name: "simple-web-token-authentication",
		port: 8085,
		log: log
	};
	let server = restify.createServer(serverOptions);
	server.use(restify.queryParser());
	server.use(restify.bodyParser({ mapParams: false }));

	server.post("sign-in", singIn);
	server.post("sign-out", singOut);
	server.post("verify", verify);


	server.listen(serverOptions.port, function () {
		log.info("%s listening at %s", server.name, server.url);
	});



});