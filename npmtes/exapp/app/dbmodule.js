var schema = require('../models/index.js');

dbmodule = {};

dbmodule.setPet = function(pet_name, family_name, animal_name) {
  return new Promise(function(resolve, reject) {
    var Pet = schema.Pet;
    var Family = schema.Family;
    var Animal = schema.Animal;
    var Category = schema.Category;
    var AnimalCategory = schema.AnimalCategory;

    Family.findOne({
      name: family_name
    }, function(err, family_result) {
      console.log(family_result.name);

      Animal.findOne({
        name: animal_name
      }, function(err, animal_result) {

        console.log(animal_result.name);

        AnimalCategory.find({
          animal: animal_result._id
        }, function(err, animal_category_result) {

          // console.log(animal_category_result[0].category);
          console.log(animal_result._id);

          pet = new Pet({
            name: pet_name,
            family: family_result._id,
            animal: animal_result._id,
            category: animal_category_result[0].category
          });

          pet.save(function(err) {
            if (err) console.log(err);
          });

        });



      });

    });
  });
};

dbmodule.getPet = function() {
  return new Promise(function(resolve, reject) {
    var Pet = schema.Pet;
    var Family = schema.Family;
    var Category = schema.Category;
    var Animal = schema.Animal;
    var AnimalCategory = schema.AnimalCategory;

    Pet.find()
      .populate('family')
      .exec(function(err, pet) {
        if (err) console.log(err);
        console.log(pet[0].family.name);
        result = {};
        result.family = pet[0].family.name;
        result.name = pet[0].name;

        Pet.find()
          .populate('animal')
          .exec(function(err, pet2) {
            result.animal = pet2[0].animal.name;

            Pet.find()
              .populate('category')
              .exec(function(err, pet3) {
                result.category = pet3[0].category.name;
                console.log(result);
                resolve(result);
                // resolve(result);
              });

          });

      });


  });
};

dbmodule.getPetByPetName = function(pet_name) {
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
        result.family = pet.family.name;
        console.log(result);
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

module.exports = dbmodule;
