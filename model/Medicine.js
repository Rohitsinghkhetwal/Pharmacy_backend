const mongoose = require("mongoose");

const MedicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: String,
    required: true,
  },
  menufacturer: {
    type: String
  },
  stock: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  }
},{timestamps: true});

module.exports = mongoose.model("Medicines", MedicineSchema);