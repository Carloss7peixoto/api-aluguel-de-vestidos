// /src/models/Dress.js

const mongoose = require('mongoose');

const dressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: { type: String, required: true },
  color: { type: String, required: true },
  // ... outras propriedades
});

module.exports = mongoose.model('Dress', dressSchema);


