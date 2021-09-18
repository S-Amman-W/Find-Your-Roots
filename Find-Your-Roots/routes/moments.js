const express = require('express');
const router = express.Router();
const Moment = require('../models/Moments');

// Gets back all moments
router.get('/', async (req,res) => {
    try {
        const moments = await Moment.find();
        res.json(moments);
    } catch (err) {
        res.json({ message: err });
    }
});

/*
router.get('/special', (req,res) => {
    res.send('We are on a special moment!');
}); */

//Submits a moment
router.post('/', async (req,res) => {
    const moment = new Moment({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    });
    try {
        const savedMoment = await moment.save();
        res.json(savedMoment);
        //console.log(req.body);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;