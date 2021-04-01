const Venue = require('../models/venue');
const venueJoiObject = require('../validation/venuevalidaton');
const logger = require('../utils/logger');



const create = async (req, res) => {
    logger.info('Creating a new venue');
    const { name, description, timezone, address: { address1, city, zipcode, state_name, state_code, country_name, country_code }  } = req.body;

    const validationError = await venueJoiObject.validateAsync({name, description, timezone, address1, city, zipcode, state_code, state_name, country_code, country_name}).error;   

    if (validationError) {
        res.json({status: 'failure', error: validationError})
    }

    const existing_venue = await Venue.findOne({$or : {name, address}}).exec();

    if (existing_venue) {
        res.json({status: 'failure', error: `A venue already exists with name ${existing_venue.name} and address ${existing_venue.address.address1} `});
    }

    const new_venue =  new Venue({ name, description, })
}