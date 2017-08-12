var express = require('express');
var router = express.Router();
var schema = require('../models/index.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    var Cat = schema.Cat;
    var Family = schema.Family;

    Cat.find({
        color: 'mike'
    }, function(err, cat) {
        console.log(cat[0].name);
        Family.find({
            first_name: cat[0].name
        }, function(err, family) {
            console.log(family[0].family_name);
        });
    });

    res.render('index', {
        title: 'Express'
    });
});

module.exports = router;
