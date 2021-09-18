const mongoose = require('mongoose');

//schema

const MomentsSchema = mongoost.Schema({
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
        type: String,
        required: true,
        default: Date.now
    },

})