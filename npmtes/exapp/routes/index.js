var express = require('express');
var router = express.Router();
var schema = require('../models/index.js');
var dbmodule = require('../app/dbmodule.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send(dbmodule.getPetByPetName('ちょこ'));
  res.send(dbmodule.getPet());
});

/* GET home page. */
router.get('/insert/:name', function(req, res, next) {
  dbmodule.setPet(req.params.name, '戸松',   '猫');
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;
