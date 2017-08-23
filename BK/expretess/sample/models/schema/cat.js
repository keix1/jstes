var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Cat = new Schema({
    name: String,
    color: String
});

exports.Cat = mongoose.model('Cat', Cat);
