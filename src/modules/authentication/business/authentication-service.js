let jwt = require("jsonwebtoken");
let fs = require("fs");
let assert = require("assert-plus");
let uuid = require("uuid");

/**
 *   Handle all authentication operations   
 */
class AuthenticationService {
	/**
	 * @param {Object} log 
	 *  Logger instance
	 */
	constructor(log) {
		this._log = log;
	}

	/**
	 * Check user identification and create token
	 * @param {string} login
	 *   Login of the user
	 * @param {string} password
	 *   Password of the user
	 * 
	 * @returns {Promise}
	 */
	authenticate(login, password) {
		return new Promise((resolve, reject) => {
			// check login and password
			// reject with Error

			let payload = {
				jti: uuid.v4(),
				exp: Math.floor((Date.now() / 1000)) + 240,
				uid: "user id"
			};

			let token = this.createJwt(payload);

			resolve(token);
		});
	}


	/**
     * Create new Jwt using RS256 and private key 
     * @param {string} payload 
     *   Object with token content
	 * @returns {string} 
	 * token
     */
	createJwt(payload) {
		assert.object(payload, "payload");
		let privateKey = fs.readFileSync(process.cwd() + "/keys/private.pem");
		let token = jwt.sign(payload, privateKey, { algorithm: "RS256" });
		this._log.debug("Jwt create with sucess");
		return token;
	}

    /**
     * Verify if token is valid
     * 
     * @param {string} token
     *    Token jwt to be verified
     * 
     * @returns {Promise} 
     */
	checkJwt(token) {
		return new Promise((resolve, reject) => {
			assert.string(token, "token");
			let publicKey = fs.readFileSync(process.cwd() + "/keys/public.pem");

			jwt.verify(token, publicKey, { algorithm: "RS256" }, (error, decoded) => {
				if (error) {
					this._log.debug({ err: error }, "Jwt create with sucess.");
					reject(error);
					return;
				}
                //TODO: check if token is in blacklist 

				resolve(decoded);
			});
		});
	}

    /**
     * Cancel  token 
     * 
     * @param {string} token
     *    Token jwt to be verified     
     * 
     */
	revokeJwt(token) {
		assert.string(token, "token");
        //TODO insert token in blacklist
	}
}



module.exports = AuthenticationService;