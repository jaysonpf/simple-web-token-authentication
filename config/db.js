const mongoose = require('mongoose');
const log = require('./log');

let conection = mongoose.connect("mongodb://{host}:{port}/?ssl=true", {
    auth: {
      user: "{usuario}",
      password: "{password}"
    }
  })
  .catch(err =>{

    log.error("error establishing a database connection", err);
    throw err;	
});


module.exports = conection;