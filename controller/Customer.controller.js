const Customers = require("../model/Customer.js");

exports.createCustomers = async(req, res) => {
  const {name, phone, email, purchase } = req.body;
  try {
    if(!name || !phone || !email || !purchase) {
      return res.status(400).json({message: "Fill all the fields"})
    }
     await Customers.create({
      name,
      phone,
      email,
      purchase
    });

    return res.status(200).json({messages: "Customer created !"})
  }catch(err) {
    console.log("Something went wrong here !",err);
    return res.status(400).json({message: "Customer not created !"})
  }
}

exports.getAllCustomers = async(req, res) => {
  try {
    const result = await Customers.find();
    console.log("result", result);                               
    return res.status(200).json(result);
  }catch(err) {
    return res.status(400).json({message: "Cannot get all customers"});

  }

}