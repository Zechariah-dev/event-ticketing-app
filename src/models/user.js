const mongoose = require('mongoose');

const  { Schema, model } = mongoose;

const userSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    
});

const userModel = model('user', userSchema);

module.exports = userModel;