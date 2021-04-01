const jwt = require('jsonwebtoken');
const utf8 = require('utf8');
const base64 = require('base64');
const logger = require('../utils/logger');
const 

function generateToken(params) {
    const jwtToken = jwt.sign({
      data: params.email
    }, secret, { expiresIn });
    const bytes = utf8.encode(jwtToken);
    const token = base64.encode(bytes);
  
    return {
      token,
      expiresIn
    };
  }

  function verifyToken(req, res, next) {
    try {
      const { token } = req.headers;

      if (!token) {
        return res.status(401).json({message: 'Authorization code is empty'})
      }
  
      const bytes = base64.decode(token);
      const Token = utf8.decode(bytes);
  
      return jwt.verify(token, secret);

    } catch (error) {
      return next(error);
    }
  }

module.exports = { generateToken };