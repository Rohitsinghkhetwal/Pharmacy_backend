const Medicine = require("../model/Medicine");

exports.createMedicines = async(req, res) => {
  const {name, description, batchNumber, expiryDate, menufacturer, price, stock, category} = req.body;
  try {
    
    const result = await Medicine.create({
      name:name,
      batch: batchNumber,
      category: category,
      price: price,
      stock: stock,
      expiryDate: expiryDate,
      menufacturer:menufacturer || "",
      description: description || ""
    })

    res.status(200).json({data: result, message: "Medicine created successfull !"})
  }catch(err) {
    console.log("Something went wrong here ", err);
    res.status(400).json({message: "Something went wrong while creating the Medicine"});
  }

}