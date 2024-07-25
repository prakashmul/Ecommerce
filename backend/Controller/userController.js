const bcrypt = require("bcrypt");
const UserModel = require("../Model/userModel");
const jwt = require("jsonwebtoken");
const {expressjwt: ExpressJWT} = require("express-jwt");

const secretKey = process.env.SECRET_KEY

exports.CreateUser = async (req, res) => {
  const CheckEmail = await UserModel.findOne({ email: req.body.email });
  const CheckContact = await UserModel.findOne({
    "userDetail.phoneNumber": req.body.phoneNumber,
  });

  if (CheckContact) {
    return res.status(400).json({ error: "Contact already exist" });
  }

  if (CheckEmail) {
    return res.status(400).json({ error: "Email already exist" });
  } else {
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    const createUser = await new UserModel({
      email: req.body.email,
      password: hashPassword,
      "userDetail.firstName": req.body.firstName,
      "userDetail.middleName": req.body.middleName,
      "userDetail.lastName": req.body.lastName,
      "userDetail.phoneNumber": req.body.phoneNumber,
      "userDetail.address": req.body.address,
      "userDetail.gender": req.body.gender,
    });

    const saveUser = await createUser.save();
    if (!saveUser) {
      return res.status(400).json({ error: "User registration failed" });
    } else {
      return res.status(200).json({ message: "User registration succesful" });
    }
  }
};

exports.getAllUser = async (req, res) => {
  const users = await UserModel.find();
  if (!users) {
    return res.status(400).json({ message: "User not found" });
  } else {
    return res.send(users);
  }
};

exports.updateUser = async (req, res) => {
  const update = await UserModel.findByIdAndUpdate(
    req.params.id,
    {
      "userDetail.firstName": req.body.firstName,
      "userDetail.middleName": req.body.middleName,
      "userDetail.lastName": req.body.lastName,
      "userDetail.phoneNumber": req.body.phoneNumber,
      "userDetail.address": req.body.address,
      "userDetail.gender": req.body.gender,
    },
    { new: true }
  );

  if (!update) {
    return res.json({ message: "Not found" }).status(400);
  }
  res.send(update);
};

exports.logIn = async (req, res) => {
  const { email, password } = req.body;

  const checkUser = await UserModel.findOne({ email: email });

  if (!checkUser) {
    return res.json({ message: "User not  found" }).status(400);
  }

  const checkPassword = await bcrypt.compare(password, checkUser.password);

  const access_token = await jwt.sign(
    {
      name: checkUser.userDetail.firstName,
      id: checkUser._id,
      email: checkUser.email
    }, process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );

  if (!checkPassword) {
    return res.json({ error: "Password is invalid" }).status(400);
  }

  return res.json({ message: "Login Successful", accessToken: access_token }).status(201);
};

exports.verifyJWT = ExpressJWT({
  secret: secretKey,
  algorithms: ["HS256"]
})
// .then((req) => {
//   if(!req.auth.admin){
//     return res.json({error:"Unauthorized"}).status(401)
//   }
// }).catch(() => {
//   return res.json({error:"Unauthorized"}).status(401)
// })