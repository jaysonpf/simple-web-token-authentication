let chai = require("chai");
let sinon = require("sinon");
let Bunyan = require("bunyan");

let expect = chai.expect;

let AuthenticationService = require("../../../../../src/modules/authentication/business/authentication-service");


describe("Authentication service", () => {
	let log = sinon.createStubInstance(Bunyan);
	let tokenSample = "";

	beforeEach("create mock token", () => {
		tokenSample = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMTk4MmU0Zi0xZmU1LTRjY2EtYmU4Yy1jODU3MzUwMmVlZmMiLCJleHAiOjE0ODg0OTgwNTcsInVpZCI6InVzZXIgaWQiLCJpYXQiOjE0ODg0OTc4MTh9.Lii9tmwaNWUoWMlZD-LsB_SY8hzXE6H2R958RvbqswOQJc2IDOCa3my-Puv5uP2q7VwMdS351SZTdCPL-QLbWMojo-PmgNEHKsuhiFftpT85R9uZ6bWLqvqrVgvykkJrTZ_fstZQ2poiltRhpEpo29b4qkQXjRqJnxop-hERhNw";
	});


	describe("#authenticate", () => {

		it("should create new token", (done) => {
			let authenticationService = new AuthenticationService(log);
			authenticationService.authenticate("userXpto", "123$%")
				.then(token => {
					expect(token).to.be.string;
					done();
				}).catch(done);
		});
	});


	describe("#checkJwt", () => {
		it("should get error with expired token", (done) => {
			let authenticationService = new AuthenticationService(log);
			authenticationService.checkJwt(tokenSample)
				.then(token => {
					done("error");

				}).catch(err => {
					expect(err).to.exist;
					done();
				});
		});
	});
	xdescribe("#revokeJwt", () => {
		xit("should revoke token with sucess", (done) => {
			// not implemented

		});
	});
});



