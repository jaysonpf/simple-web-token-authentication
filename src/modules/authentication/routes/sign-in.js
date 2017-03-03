let AuthenticationService = require("../business/authentication-service");

/**
 * Handles sign requests * 
 */
function signIn(req, res, next) {

	let authenticationService = new AuthenticationService(req.log);

	let user = req.body.user;
	let password = req.body.password;

	authenticationService.authenticate(user, password)
		.then(token => {
			res.send({ token: token });

		}).catch(err => {
			res.send(500, err);
		});

	next();
}


module.exports = signIn;