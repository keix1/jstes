var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/animal');


module.exports = require('./schema/cat.js');
// module.exports = require('./schema/Family.js');
