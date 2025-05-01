const express = require('express');
const connection = require("./database/Connection.js");
const cors = require("cors");
const medicineRoutes = require("./routes/medicine.route.js")
require("dotenv").config()

const app = express();
app.use(express.json());
app.use(cors());

connection();


app.get("/", (req, res) => {
  res.json("hey this is the fist app");
})

app.use("/api/v1", medicineRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
  console.log(`Port is running in ${PORT}`)

})
