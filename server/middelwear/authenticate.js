const jwt = require("jsonwebtoken");
const User = require("../model/usermodel");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifytoken = jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await User.findOne({
      _id: verifytoken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User not Found");
    }
    // console.log(rootUser)
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (e) {
    res.status(401).send("unauthorized token : No token provided");
    console.log("unauthorized token : No token provided");
  }
};
module.exports = Authenticate;
