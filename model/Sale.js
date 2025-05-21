const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  medicineName: { type: String, required: true },
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
});

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  purchase: { type: String }, 
}, { _id: false });


const orderSchema = new mongoose.Schema({
  customer: { type: customerSchema, required: true },
  items: { type: [itemSchema], required: true },
  subtotal: { type: Number, required: true },
  tax: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  total: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['pending', 'paid'], default: 'pending' },
  invoice: {type: String, required: true}
}, { timestamps: true });

module.exports = mongoose.model('Sales', orderSchema);
