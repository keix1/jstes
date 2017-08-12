var express = require('express');
var router = express.Router();
var schema = require('../models/index.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  
});




/* GET home page. */
router.get('/insert/:name', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;
