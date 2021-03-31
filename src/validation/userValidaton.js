const Joi = require('joi');

const userJoiObjet = Joi.object({
    first_name: Joi.string().min(2).max(30).required(),
    last_name: Joi.string().min(2).max(30).required(),
    email: Joi.string().regex(),

})

module.exports = userJoiObjet;