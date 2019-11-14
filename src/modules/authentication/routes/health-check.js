
/**
 * Health check  * 
 */
function healthCheck(req, res, next) {

	req.log.debug('health-check endpoint ok');

	res.send({ status: "OK" });

	next();
}


module.exports = healthCheck;