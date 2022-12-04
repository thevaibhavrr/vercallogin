const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//User Model 
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  place: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    min: 10,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});


//Change Password Fome Before save in Database
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});


// Token for authnticate User After Login
// UserSchema.methods.AuthnticateToken = async function () {
//   try {
//     let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//     this.tokens = this.tokens.concat({ token: token });
//     await this.sign();
//     return token;
//   } catch (e) {
//     console.log("unable to create token", e);
//   }
// };


UserSchema.methods.AuthnticateToken = async function(){
  try{
    let token = jwt.sign({_id : this._id},process.env.SECRET_KEY)
    this.tokens = this.tokens.concat({token : token})
    await this.save()
    return token
  }catch(e){
    console.log(e)
  }
}

//Send user model to mongoose
const User = mongoose.model("USER", UserSchema);
module.exports = User;
