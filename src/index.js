const restify = require("restify");
const bunyan = require("bunyan");
const mongoose = require("mongoose");
const singIn = require("./modules/authentication/routes/sign-in");
const singOut = require("./modules/authentication/routes/sign-out");
const verify = require("./modules/authentication/routes/verify");

let log = bunyan.createLogger({
	name: "simple-web-token-authentication",
	level: "debug",
	serializers: {
		err: bunyan.stdSerializers.err
	}
});

log.info("starting server... ");

mongoose.connect("mongodb://localhost:27017/token-test", {useNewUrlParser: true} )
.then(()=>{
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


	server.listen(serverOptions.port, function () {
		log.info("%s listening at %s", server.name, server.url);
	});

})
.catch(err =>{

	log.error("error establishing a database connection", err);
		process.exit(1);
});
