var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/animal');


module.exports = require('./schema/cat.js');
