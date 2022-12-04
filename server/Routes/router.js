const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/usermodel");
require("../DB/conn");
const autnticate = require('../middelwear/authenticate');

//All user details
router.get("/", async (req, res) => {
  const data = await User.find();
  return res.json(data);
});
 
//Register New user

router.post("/add",async (req, res) => {
  const { name, email, age, place, phone, password } = req.body;
  console.log(req.body);
  //checking data in fome
  if (!name || !email || !age || !place || !phone || !password) {
    return res.status(422).json({ err: "Please fill all Data" });
  } else {
    try {
      //Check if email id is alread present or not
      const userExist = await User.findOne({ email: email });
      if (!userExist) {
        //getting data from body
        const user = new User({ name, email, age, place, phone, password });
        //Save data in database
        await user.save();
        return res.status(200).json({ message: "User Register Sucessfull" });
      } else {
        //userExist error
        return res.status(201).json({ err: "Email id is Already Exist" });
      }
    } catch (e) {
      //if any error in function
      console.log(e);
      return res.json({ e });
    }
  }
});

//Login User
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ err: "Please fill all Data" });
  } else {
    try {
        //Email id check in DataBase
      const userExist = await User.findOne({ email: email });
      if (userExist) {
        // Password check in dataBase
        const PassCheck = await bcrypt.compare(password, userExist.password);
        //Token save in Database
        let token = await userExist.AuthnticateToken();
        console.log(token);
        //Token save in Cookies fome
        res.cookie('jwtoken',token,{
            httpOnly:true
        })
        //Succesfull
        if (PassCheck) {
          res.status(200).json({ message: "user login succefful" });
        } else {
          res.status(400).json({ err: "pass not match" });
        }
      } else {
        res.status(533).json({ err: "email are not valid" });
      }
    } catch (e) {}
  }
});

router.get('/about',autnticate,async(req,res)=>{
  const data = await req.rootUser
  res.status(200).json(data)
})


router.get('/logout', async(req, res) => {
  console.log("user logout");
 await res.clearCookie('jwtoken',{path:'/'})
 await res.status(200).send("user logout");

});
//send this file details to other file
module.exports = router;
