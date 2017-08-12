var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/animal');


exports.Cat = require('./schema/Cat.js');
exports.Family = require('./schema/Family.js');
