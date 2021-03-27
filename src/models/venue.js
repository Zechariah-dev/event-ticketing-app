const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const venueSchema = new Schema({
    name: String,
    description: {
        type: String,
        maxlength: 120
    },
    slug: String,
    created_at: Date,
    updated_at: Date,
    time_zone: String,
    tzinfo: {
        name: String,
        identifier: String,
        offset: Number,
        formatted_offset: String
    },
    address: {
        id: String,
        address1: String,
        city: String,
        zipcode: Number,
        state_name: String,
        state_code: String,
        country_name: String,
        country_code: String
    }
})

const venueModel = model('venue', venueSchema);

module.exports = venueModel;