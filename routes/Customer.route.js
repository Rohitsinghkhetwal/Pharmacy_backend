const express = require("express");
const customerController = require("../controller/Customer.controller.js");

const router = express.Router();

router.post("/create-customer", customerController.createCustomers)
router.get("/getAllCustomers", customerController.getAllCustomers)


module.exports = router;