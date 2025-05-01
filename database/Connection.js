const mongoose = require("mongoose")

const Connection = async() => {
  try{ 
    const result = await mongoose.connect(`${process.env.MONGO_URI}`);
    if(result) {
      console.log("Connection established")
    }else {
      console.log("Something went wrong while connecting.....")
    }

  }catch(err) {
    console.log("Database not connected ......")

  }
}

module.exports = Connection;