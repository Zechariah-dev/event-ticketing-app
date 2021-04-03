import jwt from 'jsonwebtoken';
import utf8 from 'utf8';
import base64 from 'base64';
import { serverResponse } from './';

const { JWTEXPIRY, JWT_SECRET } = process.env

/**
 * @name generateToken
 * @param {object} payload
 * @param {String} expiresIn
 * @return {string} token
 */

function generateToken(params) {
    const jwtToken = jwt.sign({
      data: params.email
    }, JWT_SECRET, { JWTEXPIRY });
    const bytes = utf8.encode(jwtToken);
    const token = base64.encode(bytes);
  
    return token;
  }

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