const User = require("../model/User");
const bcrypt = require("bcrypt")


exports.createUser = async(req, res) => {
  const {name , email, password} = req.body;
  try{
    if(!name || !email || !password) {
      res.json({message: "fill all the fields first"});
    }

    const existingUser = await User.findOne({email});

    if(existingUser) {
      return res.json({message: "User already exists"});
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await User.create({
      name: name,
      email: email,
      password: hashedPassword
    })

    res.status(200).json({message: "User created successfully !"})
  }catch(err) {
    console.log("something went wrong", err);
    res.status(401).json({message: "Something went wrong while creating a User .."})
  }

}


exports.login = async() => {
  const {email, password} = req.body;
  try {

  }catch(err) {

  }

}