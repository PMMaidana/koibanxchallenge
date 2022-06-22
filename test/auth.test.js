const { expect } = require('chai');
const Authenticator = require('../auth/auth');
const User = require('../models/user');
const mongoose = require('mongoose');


describe('Authenticator', function () {

    it('should authenticate bcrypt hash with basicAuth', async function () {

        User.create({username: 'admin', password: 'admin'});
        
        const token = Buffer.from("admin:admin").toString('base64')
        
        let result = await new Authenticator().authenticate(`Basic ${token}`);

        expect(result, true); 

    })
})
