const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const COLLECTION_NAME = "User";

const schemaUser = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id : {type: String, required: true },   
    telephones: [{
        number: Number,
        ddd: Number
    }],
    createDate: { type: Date, default: Date },
    lastUpdate: { type: Date, default: Date }   
});

let model = mongoose.model(COLLECTION_NAME, schemaUser);

module.exports = model;