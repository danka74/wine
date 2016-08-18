const mongoose = require('mongoose');

module.exports = mongoose.model('Wine', new mongoose.Schema({
  name: { type: String, required: true },
  year: { type: String, Number, min: 1900, max: 2100},
  count: { type: Number, min: 0, default: 0 },
  location: { type: String }
}));
