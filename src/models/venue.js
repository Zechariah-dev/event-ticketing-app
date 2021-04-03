import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const venueSchema = new Schema({
    name: String,
    description: {
        type: String,
        maxlength: 120
    },
    status: {
        type: String,
        enums: ['Active', 'Under Innovation', 'Inactive']
    },
    slug: String,
    created_at: { type: String, default: Date.now},
    updated_at: {type: String, default: Date.now},
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

export default venueModel;