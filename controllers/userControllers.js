const User = require("../models/userSchema")
const bcrypt = require("bcrypt")
const {validate} = require ("../config/Validator")
const {generateToken} =require("../utils/generateToken")

//adding a user
 const addUser= async (req, res) => {
   const user = await User.findOne({ email: req.body.email });
   if (!user) {
     const { username, email, password } = req.body;
 
     const hashpassword = await bcrypt.hash(password, 10);
 
     const user = await User.create({
       username,
       email,
       password: hashpassword,
       
     });
     // console.log(user);
     res.status(201).json({
       success: true,
       data: {
         user,
         token: generateToken(user._id),
       },
     });
   } else {
     res.status(400).json({
       success: false,
       error: "User already exists",
     });
   }
 };


// user login
async function loginUser(req, res){
   try {
      const { email, password } = req.body;

      const user = await User.findOne({email});
      if(!user){
         return res.status(404).json({
            error: true,
            massege:"Account not found",

         });
      }
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid){
         return res.status(400).json({
            error: true,
            massege: "Invalid password",
         });
      }
      return res.status(200).send({
         success: true,
         massage: "User logged in",

      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({
         error: true,
         massage: "couldn't login. please try again",

      });
    }
}
//getting user
const getUsers=async(req, res) => {
   const users = await User.find();
   res.status(200).json(users);
}

module.exports={addUser, loginUser, getUsers}




