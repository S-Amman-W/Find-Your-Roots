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

// find a specific moment
router.get('/:postId', async (req,res) => {
    try {
        const moment = await Moment.findById(req.params.postId);
        res.json(moment);
    } catch (err) {
        res.json({message: err});
    }
});

// delete a moment
router.delete('/:postId', async (req,res) => {
    try {
        const removedMoment =  await Moment.remove({  _id: req.params.postId });
        res.json(removedMoment);
    } catch (err) {
        res.json({message: err});
    }
   
});

// update a moment
router.patch('/:postId', async (req,res) => {
    try {
        const updateMoment =  await Moment.updateOne({  _id: req.params.postId }, 
            {$set : {title: req.body.title}});
        res.json(updateMoment);
    } catch (err) {
        res.json({message: err});
    }
   
});

module.exports = router;