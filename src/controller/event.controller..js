import { Venue, Event } from "../models";
import { serverResponse, serverError, generateSlug } from "../helpers";


class Event {
    /**
 * @name create
 * @param {object} req -> express request object
 * @param {object} res -> express request object
 * @return {object} created Event
 */
    static async create(req, res) {
        try {
            const { body: {name, start, date, status}, params: { id}  } = req;
            
            const allocated_venue = await Venue.findById(id).exec();

            if(!allocated_venue) {
                return serverResponse(401, res, {
                    status: 'failure',
                    message: `venue ${id} doesn\'t exist`
                })
            }   

            const slug = generateSlug(name);

            if(!s)

            const newEvent = new Event({name, start, date, status,allocated_venue, slug});

            return serverResponse(201, res, {
                message: `${name} created successfully`,
                data: newEvent
            })

        } catch (error) {
            serverError(res);
        }
    };

}