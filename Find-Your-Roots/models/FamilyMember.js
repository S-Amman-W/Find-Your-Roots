const mongoose = require('mongoose');

//schema

const FamilyMemberSchema = mongoose.Schema({
    //properties
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        default: ""
    },
    occupation: {
        type: String,
        required: true,
        default: "Unemployed"
    },
    age: {
        type: Number,
        required: true
    },
    funFacts: {
        type: String
    }

});


module.exports = mongoose.model('FamilyMember', FamilyMemberSchema);