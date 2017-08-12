var express = require('express');
var router = express.Router();
var schema = require('../models/index.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  var Pet = schema.Pet;
  var Family = schema.Family;

  // Pet.find({
  //     name: '松岡'
  // }, function(err, pet) {
  //     console.log(pet[0].name);
  //     Family.find({
  //         name: pet[0]._id
  //     }, function(err, family) {
  //         console.log(family[0].name);
  //
  //     });
  // });

  Pet.findOne({
    name: 'ちょこ'
  }).populate('family')
  .exec(function(err, pet) {
    console.log(pet.family.name);
  });

  res.render('index', {
    title: 'Express'
  });
});




/* GET home page. */
router.get('/insert/:name', function(req, res, next) {
  var Pet = schema.Pet;
  var Family = schema.Family;

  Family.find({
    name: '松岡'
  }, function(err, family_result) {
    console.log(family_result[0].name);
    pet = new Pet({
      name: req.params.name,
      family: family_result[0]._id
    });
    pet.save();
  });

// Pet.findOne({
//   name: 'ちょこ'
// }).populate('family')
// .exec(function(err, pet) {
//   console.log(pet.family.name);
// });

res.render('index', {
  title: 'Express'
});
});

module.exports = router;
