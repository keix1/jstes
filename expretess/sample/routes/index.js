var express = require('express');
var router = express.Router();

var schema = require('../models/index.js');
var Cat = schema.Cat;

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', {
        title: 'Express'
    });

    // console.log('あれ');
    // Cat.find({
    //     color: 'mike'
    // }, function(err, result) {
    //     if (err) throw err;
    //     console.log('ああああ' + result[0].color);
    //
    //     res.render('index', {
    //         title: 'inin'
    //     });
    // });

});

router.param('id', function(req, res, next, id) {
    var users = ['taguchi', 'fkoji', 'dotinstall'];
    req.params.name = users[id];
    next();
});

router.get('/hello/:id', function(req, dres) {
    res.send('hello ' + req.params.id);
    next();
});

router.get('/insert/:name', function(req, dres) {

    next();
});

router.get('/bye/:id', function(req, dres) {
    res.send('bye ' + req.params.id);
    next();
});

module.exports = router;
