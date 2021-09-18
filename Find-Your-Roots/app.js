const express = require('express');

const app = express();

// Middlewares  - functions that run when we hit a route
app.use('/personality-test', () => {
    console.log('This is a middleware function for personality test?');
})


// ROUTES here
app.get('/', (req,res) => {
    res.send('This is the home page')
})

app.get('/personality-test', (req,res) => {
    res.send('This is the personality test page?')
})

//app.post for submitting forms??

//listen to the server
app.listen(3000);