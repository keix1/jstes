var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Animal = new Schema({
    name: String
});

module.exports = mongoose.model('Animal', Animal);
