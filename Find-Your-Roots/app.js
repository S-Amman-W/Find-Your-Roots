const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// Middlewares  - functions that run when we hit a route
app.use(bodyParser.json());

// import routes
const momentsRoute = require('./routes/moments');
app.use('/moments', momentsRoute);

const userRoute = require('./routes/user');
app.use('/user', userRoute);

// ROUTES here
app.get('/', (req,res) => {
    res.send('This is the home page');
});


//app.post for submitting forms??

//listen to the server
app.listen(3000);

//Connect to database
mongoose.connect(process.env.DB_CONNECT, () => 
    console.log('connected to database!')
);