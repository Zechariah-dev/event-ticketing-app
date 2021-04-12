import { serverError, serverResponse } from '../helpers';
import TicketType from '../models/ticket_type';

class Ticket_Type {

    static async create(req, res) {
        try {
            const {name} = req.body;

            const existing_ticket = await TicketType.findOne({name}).exec();

            if (existing_ticket) {
                return serverResponse(res, 401, {
                    message: `ticket-dtype ${name} already inexistence`
                });
            }
             const created_ticket_type = await new_ticket_type.save();

             return serverResponse(res, 201, {
                 message: `${created_ticket_type._id} created successfully`,
                 data: created_ticket_type
             });
          
        } catch(error) {
            console.error(error);
            serverError(res);
        }
    }

    static async getSingle (req, res) {
        try {
            const { id } = req.params;

            const ticket_type = await TicketType.findById(id).exec();

            if (!ticket_type) {
                return serverResponse(res, 401, {
                    message: `${id} ticket_type not found`,
                });
            }

            return serverResponse(res, 201, {
                data: ticket_type
            });
        } catch (error) {
            console.log(error);
            serverError(res);
        }
    }

    static async getAll (req, res) {
        try {
            
        } catch (error) {
            serverError(res);           
        }
    }
}