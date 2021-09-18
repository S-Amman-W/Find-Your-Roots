const mongoose = require('mongoose');

//schema

const UserSchema = mongoose.Schema({
    //properties
    name: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true,
        id: Number
    }

})


module.exports = mongoose.model('User', UserSchema);