// requires
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

// Project files
const mysql_config = require('./inc/mysql_config');
const functions = require('./inc/functions');

const API_AVAILABILITY = true;
const API_VERSION = "1.0.0";

// init server
const app = express();
app.listen(3000, () => { console.log("API is running"); });

// check if api is available
app.use("/", (req, res, next) => {
    if (API_AVAILABILITY) {
        next();
    } else {
        res.json(functions.response('Warning', 'API is in maintenance. Sorry!', 0, null));
    }
});

// mysq connection
const connection = mysql.createConnection(mysql_config);

// cors
app.use(cors());

//------------------------------------------------------------------------------
// routes
app.get("/", (req, res) => {
    res.json(functions.response('Success', 'API is running', 0, null));
});

//------------------------------------------------------------------------------
// endpoints

//------------------------------------------------------------------------------
app.use((req, res) => {
    res.json(functions.response('Warning', 'Route not found', 0, null));
})
