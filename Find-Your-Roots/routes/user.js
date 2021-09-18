const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req,res) => {
    res.send('We are on users?');
});



module.exports = router;