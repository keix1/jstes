var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Family = new Schema({
    family_name: String,
    first_name: String
});

module.exports = mongoose.model('Family', Family);
