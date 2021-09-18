const express = require('express');
const router = express.Router();
const Moments = require('../models/Moments');


router.get('/', (req,res) => {
    res.send('We are on moments');
});

router.get('/special', (req,res) => {
    res.send('We are on a special moment!');
});

//create a moment test
router.post('/', (req,res) => {
    /*const moment = new Moments({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
    .exec()
    .then()*/
    console.log(req.body);
});


module.exports = router;