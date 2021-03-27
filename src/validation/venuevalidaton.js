const Joi = require('joi');

const venueJoiObject = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    description: Joi.string().alphanum().min(10).max(120).required(),
    created_date: Joi.date().required(),
    timezone: Joi.string().min(3).max(30).required(),
    address: {
        address1: Joi.string().trim().required(),
        city: Joi.string().required(),
        zipcode: Joi.number().min(3).max(6),
        state_name: Joi.string().required(),
        state_code: Joi.string().required(),
        country_name: Joi.string().required(),
        country_code: Joi.string().required()
    }
}).with('name', 'address');

module.exports = venueJoiObject;