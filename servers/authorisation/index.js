/***
 * Server file for Authorizaiton
 *
 */

const expressRoute = require("express");
const app = expressRoute();
const { validateToken } = require("../../helpers/accesstoken");

const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const controller = require("./contoller/user.contorller");
const { jsonErrorHandler } = require("../../helpers/error-handler");

// Defining routes, if you want you can define the roots in a different file
// Avoiding extra effort and defining all the routes here

const validateRequest = (req, res, next) => {
  let token = req.headers["authorization"];
  if (token) {
    token = token.replace("Bearer", "").trim();
    const user = validateToken(token);

    if (user) {
      req.user = user;
      next();
    } else {
      res.status(403).send({ message: "invalid_token" });
    }
  }
  if (!token) {
    res.status(400).send({ message: "autorization_required" });
  }
};

app.use(cors());
app.use(json());
app.use(urlencoded());

app.use(validateRequest);
app.use(jsonErrorHandler);

app.get("/me", controller.getMyProfile);

module.exports = {
  app,
};
