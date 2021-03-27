const Venue = require('../models/venue');
const venueJoiObject = require('../validation/venuevalidaton');
const logger = require('../utils/logger');



const create = async (req, res) => {
    const { name, description, timezone, address: { address1, city, zipcode, state_name, state_code, country_name, country_code }  } = req.body;

    const validationError = await venueJoiObject.validateAsync({name, description, timezone, address1, city, zipcode, state_code, state_name, country_code, country_name});   
}