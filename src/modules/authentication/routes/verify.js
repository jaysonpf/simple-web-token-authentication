let AuthenticationService = require("../business/authentication-service");

/**
 * Handles sign requests * 
 */
function signIn(req, res, next) {

	let authenticationService = new AuthenticationService(req.log);

	let token = req.body.token;	

	authenticationService.checkJwt(token)
		.then(() => {
			res.send({ status: "OK" });

		}).catch(err => {
			res.send(500, err);
		});
        
	next();
}


module.exports = signIn;