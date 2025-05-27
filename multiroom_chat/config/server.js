// import Express framework module
var express = require('express');

// importa Consign module
var consign = require('consign');

// import Body Parser module
var bodyParser = require('body-parser');

// import Express Validator module
var expressValidator = require('express-validator');

// init the Express object
var app = express();

// ----------------------------------------------------
// configs
// ----------------------------------------------------

// set the variables "view engine" and "views" of the express
app.set('view engine', 'ejs');
app.set('views', './app/views');

// config the meddlewares express.static
app.use(express.static('./app/public'));

// config middleware body-parser
app.use(bodyParser.urlencoded({extended: true})); // when do some post submition from the forms, we can get the data JSON from the req.body

// config tht express-validator middleware
app.use(expressValidator());

// config the autoload to the routes, models and controllers to the app objecte (by Consign)
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);
	
// exports the app objetc
module.exports = app;