const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: String,
  price:       { type: Number, required: true },
  location:    { type: String, required: true },
  type:        { type: String, enum: ['apartment', 'villa', 'plot', 'house'] },
  bhk:         Number,
  area:        Number,
  images:      [String],
  seller:      { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Property', propertySchema);