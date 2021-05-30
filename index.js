require('dotenv').config({path:__dirname+'/.env'});

const { app: authServer } = require("./servers/authenticate");
const { app: authorisationServer } = require("./servers/authorisation");


function startServer(app, port, serverName) {
 
  app.listen(port, (eve) => {
    console.log(`server ${serverName} listen : ${port}`);
  });
}

startServer(authServer, process.env.AUTHPORT || 3000, "auth");


startServer(
  authorisationServer,
  process.env.AUTHORISATIONPORT || 3100,
  "authorisation"
);

exports.authServer=authServer;
exports.authorisationServer=authorisationServer;

