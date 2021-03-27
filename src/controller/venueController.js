const Venue = require('../models/venue');


const create = async (req, res) => {
    const { name, description, timezone, address: { address1, city, zipcode, state_name, state_code, country_name, country_code }  } = req.body;


}