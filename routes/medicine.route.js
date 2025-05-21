const express = require("express");
const medicineController = require("../controller/Medicine.controller.js");

const router = express.Router();

router.post("/create-medicine", medicineController.createMedicines)
router.get("/getAllMed",medicineController.allMedicine)
router.delete("/deleteMed/:medicineId", medicineController.deleteMedicine)




module.exports = router;