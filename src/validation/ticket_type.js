import Joi from 'joi';

const ticket_type_schema = Joi.object({
    display_name: Joi.string().min(5).max(30).required(),
    transferable: Joi.boolean().default(false),
    attachable: Joi.boolean().default(true),
    include_name: Joi.boolean().default(false),
    include_email: Joi.boolean().default(false),
    require_email: Joi.boolean().default(false),
    require_name: Joi.boolean().default(false)
});

export default ticket_type_schema;
