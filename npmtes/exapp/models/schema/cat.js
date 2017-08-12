var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Cat = new Schema({
    name: String,
    color: String,
    family: {type: Schema.Types.ObjectId, ref:'Family'}
});

module.exports = mongoose.model('Cat', Cat);
