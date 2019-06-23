//!imports

//Core node imports
const path = require("path");

//custom imports
const home = require("../backend/routes/home");

//external imports
const express = require("express");
const bodyParser = require("body-parser");

//=App configuration

const app = express();

//set the templating engine to ejs
app.set("view engine", "ejs");
app.set("views", "views");

//Allow the html to connect to css pages
app.use(express.static(path.join(__dirname, "../", 'dist')));

//Set up the body parser
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json())

//-Middleware

app.use(home);

app.listen(5000);