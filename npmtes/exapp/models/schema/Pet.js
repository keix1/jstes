var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Pet = new Schema({
    name: String,
    family: {
        type: Schema.Types.ObjectId,
        ref: 'Family'
    },
    // animalCategory:{type: Schema.Types.ObjectId, ref:'AnimalCategory'},
});

module.exports = mongoose.model('Pet', Pet);
