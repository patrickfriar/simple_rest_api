var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VehicleSchema = new Schema({
  make: String,
  model: String,
  color: String
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
