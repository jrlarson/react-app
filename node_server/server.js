var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/DataRoute'); //importing route
routes(app); //register the route
app.listen(port);

console.log('RESTful API server started on: ' + port);