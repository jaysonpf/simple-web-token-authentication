[![Build Status](https://api.cirrus-ci.com/github/jaysonpf/simple-web-token-authentication.svg)](https://cirrus-ci.com/github/jaysonpf/simple-web-token-authentication)

# Seed Project for a NodeJS Jwt based authentication
This is a seed project for Json Web Token based autenticationa with NodeJs. It expose  REST APIs for create, verify and revoke Jwt.

## Features
- Test  is automated using Gulp.
- Unit testing is available using mocha/chai/sinon with examples.


## Running the example
1. Navigate to folder & install simple-web-token-authentication: `git clone https://github.com/jaysonpf/simple-web-token-authentication && cd simple-web-token-authentication`
2. Install dependencies: `npm install`
3. Test application : `npm test`  
4. Start application : `npm start  (default port: 8085)`
5. Make some post requests on the API `sign-in`, `verify`, `health-check`

### Running with docker
 just execute: docker-compose up

Application is also available at https://simplewebtokenauthentication.azurewebsites.net/ 

Health check api: https://simplewebtokenauthentication.azurewebsites.net/health-check