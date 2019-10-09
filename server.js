
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const mysql = require('mysql');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");

const routes = require("./routes");
const cors = require("cors");



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// grabbing from the routes folder
require('../daily_schoolar/routes/html_routes')(app);
require('../daily_schoolar/routes/api_routes')(app);

// require('../daily_schoolar/routes/html_routes')(app);
// require('../daily_schoolar/routes/api_routes')(app);

app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });

