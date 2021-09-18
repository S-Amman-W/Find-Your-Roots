const mongoose = require('mongoose');

//schema

const MomentsSchema = mongoose.Schema({
    //properties
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }

});


module.exports = mongoose.model('Moments', MomentsSchema);