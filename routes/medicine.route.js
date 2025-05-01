const express = require("express");
const medicineController = require("../controller/Medicine.controller.js");

const router = express.Router();

router.post("/create-medicine", medicineController.createMedicines)




module.exports = router;