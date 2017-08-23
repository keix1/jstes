var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Pet = new Schema({
  name: String,
  family: {
    type: Schema.Types.ObjectId,
    ref: 'Family'
  },
  animal: {
    type: Schema.Types.ObjectId,
    ref: 'Animal'
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
});

module.exports = mongoose.model('Pet', Pet);
