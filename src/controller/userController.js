const User = require('../models/User');
const Joi = require('joi');
const _ = require('lodash');
const userJoiObject = require('../validation/userValidation');


const create = async (req, res) => {
    const { email, first_name, last_name, } = req.body;

    const validationError = userJoiObject.validateAsync({email, first_name, last_name}).error;

    if (!_.isEmpty(validationError)) {
        logger.error(validationError)
        return res.status(401).json({status: 'failure', error: validationError})
    }

    const existing_user = await User.findOne({email}).exec();

    if (existing_user) {
        return res.status(401).json({status: 'failure', message: `User with ${existing_user.email} already exists`})
    }


}