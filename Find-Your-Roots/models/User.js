const mongoose = require('mongoose');

//schema

const UserSchema = mongoose.Schema({
    //properties
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    occupation: {
        type: String,
    },

})


module.exports = mongoose.model('User', UserSchema);