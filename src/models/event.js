import { Schema, model } from 'mongoose';

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
   ticket_type: {
       type: Schema.Types.ObjectId,
       ref: 'ticket_types'
   },
   categories: [{
       type: Schema.Types.ObjectId,
       ref: 'categories'
   }],
   slug: String,
   start: Date,
   end: Date,
   published_at: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});


eventSchema.method.setStatus = function() {
    const event = this;
};

const eventModel = model('event', eventSchema);

export default eventModel;