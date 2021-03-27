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