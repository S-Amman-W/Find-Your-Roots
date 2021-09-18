const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('We are on moments');
});

router.get('/special', (req,res) => {
    res.send('We are on a special moment!');
});

module.exports = router;