const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Middlewares  - functions that run when we hit a route
// app.use


// ROUTES here
app.get('/', (req,res) => {
    res.send('This is the home page');
});

app.get('/personality-test', (req,res) => {
    res.send('This is the personality test page?');
});

//app.post for submitting forms??

//listen to the server
app.listen(3000);

//Connect to database
mongoose.connect('mongodb+srv://j6kao:vincentwan4@cluster0.6suns.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => 
    console.log('connected to databse????')
);