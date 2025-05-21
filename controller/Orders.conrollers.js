const Sales = require("../model/Sale.js");

exports.createSales = async(req, res) => {
  const {customer, items, subtotal, tax, discount = 0, paymentStatus = "pending", total} = req.body;
  try{
    if(!customer || !items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({message: "Customer info and at least one item are required "})
    }

    await Sales.create({
      customer,
      items,
      subtotal,
      tax,
      discount,
      paymentStatus,
      total,
      invoice: `INV-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`
    });

    res.status(200).json({message: "Sale recorded successfully !"})
  }catch(err) {
    console.log("something went wrong here !");
    res.status(500).json({message: "Internal Server Error !"})
  }
}


exports.getAllSales = async(req, res) => {
  try {
    const result = await Sales.find();
    res.status(200).json(result);

  }catch(err) {
    console.log("something went wrong !");
    res.status(500).json({message: "Something went wrong while getting the sales"});
  }
}

exports.editSaleStatus = async(req, res) => {
  const { customerId } = req.params;
  const { paymentStatus } = req.body;
  try {
    const result = await Sales.findByIdAndUpdate(customerId, {paymentStatus},
      {new: true}
    )

    if(!result) {
      return res.status(404).status({message: "Sale not found"})
    }

    return res.status(200).json({message: "Payment status updated !"})

  }catch(err) {
    console.log("Error updating payment status", err);
    return res.status(500).json({message: "Failed to update payment status"})

  }
}


