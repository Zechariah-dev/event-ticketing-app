import Joi from 'joi';

const userSchema = Joi.object({
    firstname: Joi.string()
                    .min(2)
                    .max(20)
                    .required(),
    lastname: Joi.string()
                    .min(2)
                    .max(20).
                    required(),
    email: Joi.string(),
});


export {
    userSchema
};