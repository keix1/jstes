var schema = require('./models/index.js');

dbfunc = {};

dbfunc.setPetByFamily = function(family_name, pet_name) {
  return new Promise(function(resolve, reject) {
    var Pet = schema.Pet;
    var Family = schema.Family;

    Family.findOne({
      name: family_name
    }, function(err, family_result) {
      console.log(family_result.name);
      pet = new Pet({
        name: pet_name,
        family: family_result._id
      });
      pet.save(function(err) {
        if (err) console.log(err);
      });
    });
  });
};

dbfunc.getPetByPetName = function(pet_name) {
  return new Promise(function(resolve, reject) {
    var Pet = schema.Pet;
    var Family = schema.Family;

    Pet.findOne({
        name: pet_name
      }).populate('family')
      .exec(function(err, pet) {
        console.log(pet.family.name);
        result = {};
        result.name = pet_name;
        result.family_name = pet.family_name;
        resolve(result);
      });
  });
};


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

module.exports = dbfunc;
