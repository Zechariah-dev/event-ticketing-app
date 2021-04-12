import jwt from 'jsonwebtoken';
import { serverResponse } from './serverResponse';

const { JWT_EXPIRY, JWT_SECRET } = process.env;

/**
 * @name generateToken
 * @param {object} payload
 * @return {string} token
 */

function generateToken(payload) {
    const jwtToken = jwt.sign({
      data: payload.email
    }, JWT_SECRET, { JWT_EXPIRY });
    
  
    return jwtToken;
  }

  /**
 * @name verifyToken
 * @param {object} req
 * @param {object} res
 * @param {object} next 
 * @return {string} user.email
 */

  function verifyToken(req, res, next) {
    try {
      const { token } = req.headers;

      if (!token) {
        return serverResponse(401, res, { 
          message: 'Authorization token is empty'
        });
      }
  
      return jwt.verify(token, JWT_SECRET);

    } catch (error) {
      return next(error);
    }
  }

export {
  generateToken,
  verifyToken
};