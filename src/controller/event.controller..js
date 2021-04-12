import { Venue, Event } from "../models";
import { serverResponse, serverError, generateSlug, compareDate} from "../helpers";


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
                    message: `venue ${id} not found`
                })
            }   

            const com_date = compareDate(start, end).valid;

            if(!com_date) {
                return serverResponse(res, 401, {
                    status: 'failure',
                    error: com_date.error

                })
            }

            const slug = generateSlug(name);

            const new_event = new Event({name, start, date, status,allocated_venue, slug});

            return serverResponse(201, res, {
                message: `${name} created successfully`,
                data: new_event
            })

        } catch (error) {
            serverError(res);
        }
    };

    /**
     * @name 
     */

}

export default Event;