const express = require('express');
const router = express.Router();
const Store = require('../models/store');
const Auth = require('../auth/auth');
const StoreCreator = require('../api/storeCreator');

router.use(express.json())

router.route('/stores?')
  .get(async function(req, res){
    if(await new Auth().authenticate(req.headers.authorization)){
      var page = parseInt(req.query.page) || 1;
      var limit = parseInt(req.query.limit) || 1;
      var dbQuery = JSON.parse(req.query.q);
      var storeList = await Store.find(dbQuery).skip((page-1)*(limit)).limit(limit);
      var data = {
          data: storeList,
          page: page,
          pages: 100,
          limit: limit,
          total: 1000
      }
      res.send(data)
    }
    else {
      res.status(403).send({message: 'Forbidden'})
    }
  })

  .post(async function (req,res) {
    if (await new Auth().authenticate(req.headers.authorization)) {
        try {
            let creador = await new StoreCreator().create(req.body)
            res.send(creador)
        } catch(error) {
            console.error(error);
            return res.status(400).send({message: 'Wrong parameters'})
        }
    } else {
        res.status(403).send({message: 'Forbidden'})
    }
  })

module.exports = router;
