var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/animal2');


// exports.Cat = require('./schema/Cat.js');
exports.Pet = require('./schema/Pet.js');
exports.Family = require('./schema/Family.js');
exports.Animal = require('./schema/Animal.js');
exports.Category = require('./schema/Category.js');
exports.AnimalCategory = require('./schema/AnimalCategory.js');
