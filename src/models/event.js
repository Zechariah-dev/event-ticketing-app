const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    name: String,
    status: {
        type: String,
        enum: ['Past', 'In progress', 'Future'],
        default: 'In progress'
    },
    allocated_venue: {
        type: Schema.Types.ObjectId,
        ref: 'venue'
   },
   slug: String,
   start: Date,
   end: Date,
   published_at: {
        type: Date,
        default: Date.now
    }
})


const eventModel = model('event', eventSchema)

module.exports  = eventModel;