const express = require('express');
const peopleRoutes = require("./person.router");
const departamentsRoutes = require('./departments.router');
const { route } = require('./person.router');
function routerApi(app){
     const routes = express.Router();
     app.use("/api/v1", routes); /* endpoint http://localhost:300/api/v1 */
     routes.use("people", peopleRoutes)/* endpoint http://localhost:300/api/v1/people */
     route.use('departaments', departamentsRoutes);
}

module.exports = routerApi;