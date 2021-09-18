const express = require('express');

const app = express();


// ROUTES here
app.get('/', (req,res) => {
    res.send('This is the home page')
})

//listen to the server
app.listen(3000);