var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnimalCategory = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  animal: {
    type: Schema.Types.ObjectId,
    ref: 'Animal'
  },
});

module.exports = mongoose.model('AnimalCategory', AnimalCategory);
