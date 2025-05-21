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

exports.allMedicine = async(req, res) => {
  try {
    const result = await Medicine.find();
    return res.status(200).json({result});

  }catch(err) {
    return res.status(400).json({message: "Something went wrong while fetching the medicine"})

  }
}

exports.deleteMedicine = async(req, res) => {
  const {medicineId } = req.params;
  try {
    const result = await Medicine.deleteOne({_id:medicineId});
    if(result.deletedCount === 1) {
      res.status(200).json({message: "Medicine deleted successfully !"})
    }else {
      return res.status(404).json({ message: "Medicine not found." });
    }
  }catch(err) {
    console.log("something went wrong here !", err);
    res.status(500).json({message: "Something went wrong deleting the medicine"})

  }

}