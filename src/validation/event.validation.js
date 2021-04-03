import Joi from 'joi';

const eventJoiSchema = Joi.object({
    name: Joi.string()
             .alphanum()
             .min(5)
             .max(30),
    status: Joi.string()
                .default('In progress'),
    start: Joi.date(),
    end: Joi.date(),
})

export default  eventJoiSchema;