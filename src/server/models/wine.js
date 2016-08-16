const mongoose = require('mongoose');

module.exports = mongoose.model('Wine', new mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String }
}));
