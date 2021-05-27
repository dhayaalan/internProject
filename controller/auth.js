const Auth = require("../model/auth");
const bcrypt = require("bcryptjs");

exports.signUp = async (req, res) => {
  const userName = req.body.userName;
  const EmailId = req.body.EmailId;
  const password = req.body.password;
  const pass = bcrypt.hashSync(password, 6);
  await Auth.create({
    userName: userName,
    EmailId: EmailId,
    Password: pass,
  });
  res.status(200).json({
    userName: userName,
    EmailId: EmailId,
  });
};

exports.signOut = async (req, res, next) => {
  res.status(200).json({ message: "SignOut Sucessfully:" });
};
