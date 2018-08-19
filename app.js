var express = require('express');
var bodyParser = require('body-parser');
var sample = require('./routes/sample');

//initialize our express app
var app = express();

//setup for mongoose
var mongoose = require('mongoose');



var dev_db_url = 'mongodb://username:userpassword@ds125872.mlab.com:25872/sample_user';



var mongoDB = process.env.MONGODB_URI  || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
// console.log('db');
// console.log(db);
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
 app.use('/sample', sample);

var port = 2000;

app.listen(port, () => {
	console.log('Server is up and running on Port number:' + port);

});