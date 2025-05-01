const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema({
  invoice: {
    type: String
    
  },
  customer: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true
  },
  total: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Paid"]

  }
},{
  timestamps: true
});

module.exports = mongoose.model("Sales", SaleSchema);