
/**
 * Health check  * 
 */
function healthCheck(req, res, next) {

	req.log.debug('health-check endpoint ok');

	res.send(200);

	next();
}


module.exports = healthCheck;