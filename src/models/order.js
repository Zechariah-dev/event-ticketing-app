const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const orderSchema = new Schema({
    email: {
        type: String
    },
    currency: {
        type: String
    }
})

const orderModel = model('order', orderSchema);

module.exports = orderModel;