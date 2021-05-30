require('dotenv').config({path:__dirname+'/.env'});

const { app: authServer } = require("./servers/authenticate");
const { app: authorisationServer } = require("./servers/authorisation");


function startServer(app, port, serverName) {
  app.listen(port, (eve) => {
    console.log(`server ${serverName} listen : ${port}`);
  });
}


// Start server for Authentication
// Create a auth server for port 3000
startServer(authServer, process.env.AUTHPORT || 3000, "auth");

//Start server for Authorisation
// Create a authoriation server for port 3000

startServer(
  authorisationServer,
  process.env.AUTHORISATIONPORT || 3100,
  "authorisation"
);

// Exporting for testing,

exports.authServer=authServer;
exports.authorisationServer=authorisationServer;

