import {
    serverResponse, 
    serverError,
    verifyToken
} from '../helpers';
import User from '../models';

const auth = async (req, res, next) => {
    try {
        const userEmail = verifyToken(req, res, next);

        if (!userEmail) {
            return serverResponse(res, 401, {
                message: "Jwt token verification returned an invalid result"
            });
        }

        const user = await User.findOne({email: userEmail}).select("email firstname lastnamae").exec();

        if (!user) {
            return serverResponse(res, 401, {
                message: `No user with email ${email} found`
            });
        }

        return serverResponse(res, 401, {
            data: user
        });

    } catch(error) {
        serverError(res, 401, {
            mesage: "You aint authorised"
        });
    }
};

export default auth;