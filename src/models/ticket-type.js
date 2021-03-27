const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const tickeTypeSchema = new Schema({
    display_name: {
        type: String,
    },

    transferable: {
        type: Boolean,
        default: true
    },

    attachable: {
        type: Boolean,
        default: true
    },
    include_name: {
        type: Boolean,
        default: false
    },

    include_email: {
        type: Boolean,
        default: false
    },

    require_email: {
        type: Boolean,
        default: false
    },

    require_name: {
        type: Boolean,
        default: false
    }
})

const tickeTypeModel = model(ticket_type, tickeTypeSchema);

module.exports = tickeTypeModel;