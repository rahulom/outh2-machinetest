/***
 * Server file for Authentication
 *
 */
const expressRoute=require('express');
const app=expressRoute();
const {json,urlencoded} = require('body-parser');
const cors=require("cors");
const controller=require('../authenticate/contoller/auth.contorller');
const {jsonErrorHandler}=require('../../helpers/error-handler');



// Defining routes, if you want you can define the roots in a different file 
// Avoiding extra effort and defining all the routes here

//Middlewares  
app.use(cors());
app.use(json());
app.use(urlencoded());


//Routings - 
app.post('/login',controller.authenticate);

//Error handler
app.use(jsonErrorHandler);

module.exports={
    app
};