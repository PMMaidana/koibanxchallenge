const { expect } = require('chai');
const Authenticator = require('../auth/auth');
const User = require('../models/user');
const mongoose = require('mongoose');

mongoose.Promise = Promise;

const dotenv = require('dotenv');
dotenv.config();
const config = require('config');
mongoose.connect('mongodb://' + config.get('mongodb.address') + '/' + config.get('mongodb.dbname'), { useNewUrlParser: true, useUnifiedTopology: true });
require('../utils/initializer').init()

describe('Authenticator', function () {

    it('should authenticate bcrypt hash with basicAuth', async function () {

        
        const token = Buffer.from("admin:admin").toString('base64')
        
        let result = await new Authenticator().authenticate(`Basic ${token}`);

        expect(result, true); 

    })
})
