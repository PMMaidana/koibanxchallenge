const User = require('../models/user');

let Authenticator = class {

  async authenticate(requestHeader) {
    
    if(!requestHeader) { return false; }
    
    const [ email, password ] = this.decode(requestHeader);
    const user = await User.findOne({ username: email});
    console.log(user)
    if(!user) { return false; }
    return user.verifyPassword(password);
  }

  decode(authorization) {
    const encoded = authorization.substring(6);
    const decoded = Buffer.from(encoded, 'base64').toString('ascii');
    return decoded.split(':');
  }

}

module.exports = Authenticator;