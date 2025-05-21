const express = require("express");
const SaleController = require("../controller/Orders.conrollers");


const router = express.Router();
router.post("/create-sale", SaleController.createSales);
router.get("/getAll-sale", SaleController.getAllSales);
router.patch("/updateStatus/:customerId", SaleController.editSaleStatus)
module.exports = router;