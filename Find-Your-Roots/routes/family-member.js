const express = require('express');
const router = express.Router();
const FamilyMember = require('../models/FamilyMember');

router.get('/', async (req,res) => {
    try {
        const members = await FamilyMember.find();
        res.json(members);
    } catch (err) {
        res.json({ message: err });
    }
});


router.post('/', async (req,res) => {
    const member = new FamilyMember({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        middleName: req.body.middleName,
        occupation: req.body.occupation,
        age: req.body.age,
        funFacts: req.body.funFacts
    });
    try {
        const savedFamilyMember = await member.save();
        res.json(savedFamilyMember);
        //console.log(req.body);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:postId', async (req,res) => {
    try {
        const member = await FamilyMember.findById(req.params.postId);
        res.json(member);
    } catch (err) {
        res.json({message: err});
    }
});

// delete a moment
router.delete('/:postId', async (req,res) => {
    try {
        const removedMember =  await FamilyMember.remove({  _id: req.params.postId });
        res.json(removedMember);
    } catch (err) {
        res.json({message: err});
    }
   
});

// update a member
router.patch('/:postId', async (req,res) => {
    try {
        const updateMember =  await FamilyMember.updateOne({  _id: req.params.postId }, 
            {$set : {occupation: req.body.occupation}});
        const updateMemberAgain = await FamilyMember.updateOne({ _id: req.params.postId },
            {$set : {age: req.body.age}});
        res.json(updateMember);
    } catch (err) {
        res.json({message: err});
    }
   
});

module.exports = router;