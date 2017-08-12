var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Family = new Schema({
    name: String
});

module.exports = mongoose.model('Family', Family);
