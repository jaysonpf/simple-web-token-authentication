let chai = require("chai");

let expect = chai.expect;

let ModelUser = require("../../../../../src/modules/authentication/model/user");


describe("Model user authentication", () => {

	describe("#user", () => {
		let sample = {};
		beforeEach("create mock user", () => {
			sample = {
				name: "jason",
				email: "jason@provider.com",
				password: "pass123",
				id: "123"
			};
		});

		it("all fieds ok not get validation error", () => {
			let item = new ModelUser(sample);
			expect(item.validateSync()).to.not.exist;
		});

		it("name is required", () => {
			sample.name = null;
			let item = new ModelUser(sample);
			expect(item.validateSync()).to.exist;
		});

		it("email is required", () => {
			sample.email = null;
			let item = new ModelUser(sample);
			expect(item.validateSync()).to.exist;
		});

		it("password is required", () => {
			sample.password = null;
			let item = new ModelUser(sample);
			expect(item.validateSync()).to.exist;
		});

		it("id is required", () => {
			sample.id = null;
			let item = new ModelUser(sample);
			expect(item.validateSync()).to.exist;
		});

	});


});



