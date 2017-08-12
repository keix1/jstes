var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/animal2');


// exports.Cat = require('./schema/Cat.js');
exports.Pet = require('./schema/Pet.js');
exports.Family = require('./schema/Family.js');
