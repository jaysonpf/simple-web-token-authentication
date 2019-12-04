const restify = require("restify");
const log = require('../config/log');
const db = require('../config/db');
const singIn = require("./modules/authentication/routes/sign-in");
const singOut = require("./modules/authentication/routes/sign-out");
const verify = require("./modules/authentication/routes/verify");
const healthCheck = require("./modules/authentication/routes/health-check");
const user = require("./modules/authentication/routes/user");


log.info("starting server... ");


let serverOptions = {
	name: "simple-web-token-authentication",
	port: 8085,
	log: log
};

db.then(() => {
	let server = restify.createServer(serverOptions);
	server.use(restify.plugins.queryParser());
	server.use(restify.plugins.bodyParser({
		mapParams: false
	}));

	server.post("sign-in", singIn);
	server.post("sign-out", singOut);
	server.post("verify", verify);
	server.get("health-check", healthCheck);

	server.get("user", user.get);
	server.get("user/:id", user.getById);
	server.post("user", user.post);
	server.put("user", user.put);
	server.del("user", user.delete);


	server.listen(serverOptions.port, function () {
		log.info("%s listening at %s", server.name, server.url);
	});

}).catch((error) => {
	log.error(error, "Unable to start ");
	process.exit(1);
})


