const mongoose = require('mongoose');
const Producer = require('./producer');

module.exports = mongoose.model('Wine', new mongoose.Schema({
  name: { type: String, required: true },
  producer: { type: mongoose.Schema.Types.ObjectId, ref: 'Producer'},
  type: { type: String },
  year: { type: Number, min: 1900, max: 2100},
  count: { type: Number, min: 0, default: 0 },
  location: { type: String }
}));
