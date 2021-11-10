// import core modules
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // an optional middleware to log incomming requests into the console window
const mongoose = require('mongoose');

//import middlewares
const AllowCORS = require('./middlewares/AllowCORSMiddleware');

//import routes
const blogsRoutes = require('./routes/BlogRoute');
const usersRoutes = require('./routes/UserRoute');

const app = express();
mongoose.connect('mongodb+srv://Ktechs:azk--azk466@ktechs-yaz3y.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev')); // Now all the incomming requests with funnel through it and will get logded into the console window.
app.use(AllowCORS); // Enable CORS
app.use('/blogs',blogsRoutes);
app.use('/users',usersRoutes);

module.exports = app;