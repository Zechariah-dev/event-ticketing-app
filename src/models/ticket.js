const mongoose = require('mongoose')

const { Schema, model } = mongoose;

const ticketSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
    },
    status: {
        type: String
    },
    note: {
        type: String
    },
    event_id: {
        type: Schema.Types.ObjectId,
        ref: 'event'
    },
    dispatched_at: {
        type: Date
    },
    downloaded_at: {
        type: Date
    },
    checkin_at: {
        type: Date
    },
    contact: {
        type: String,
    }
})

const ticketModel = model('ticket', ticketSchema);

module.exports = ticketModel;