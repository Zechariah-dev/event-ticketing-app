const jwt = require('jsonwebtoken');
const utf8 = require('utf8');
const base64 = require('base64');

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

module.exports = { generateToken };