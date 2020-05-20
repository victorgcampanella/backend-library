const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', BookSchema);
