import jwt from 'jsonwebtoken';
import utf8 from 'utf8';
import base64 from 'base64';
import { serverResponse } from '.';

const { JWT_EXPIRY, JWT_SECRET } = process.env

/**
 * @name generateToken
 * @param {object} payload
 * @return {string} token
 */

function generateToken(payload) {
    const jwtToken = jwt.sign({
      data: payload.email
    }, JWT_SECRET, { JWT_EXPIRY });
    const bytes = utf8.encode(jwtToken);
    const token = base64.encode(bytes);
  
    return token;
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
        })
      }
  
      const bytes = base64.decode(token);
      const Token = utf8.decode(bytes);
  
      return jwt.verify(token, JWT_SECRET);

    } catch (error) {
      return next(error);
    }
  }

export {
  generateToken,
  verifyToken
}