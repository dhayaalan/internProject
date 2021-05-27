const Auth = require("../model/auth");
const { Password } = require("../validation/auth");
const bcrypt = require("bcryptjs");

exports.signIn = async (req, res) => {
  const userName = req.body.userName;
  const EmailId = req.body.EmailId;
  const password = req.body.password;
  const pass = bcrypt.hashSync(password,6);
  const signin = await Auth.create({
    userName: userName,
    EmailId: EmailId,
    Password: pass,
  });
  res.status(200).json({
    signin: signin,
  });
};

exports.signOut = async (req, res, next) => {
  res.status(200).json({ message: "SignOut Sucessfully:" });
};
