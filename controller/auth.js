const Auth = require("../model/auth");
const bcrypt = require("bcryptjs");

exports.signUp = async (req, res) => {
  const userName = req.body.userName;
  const EmailId = req.body.EmailId;
  const password = req.body.password;
  const pass = bcrypt.hashSync(password, 6);
  const user = await Auth.create({
    userName: userName,
    EmailId: EmailId,
    Password: pass,
  });
  const signuser = await Auth.findByPk(user.id, {
    attributes: {
      exclude: ["Password"],
    },
  });
  res.status(200).json({
    signuser: signuser,
  });
};

exports.signIn = async (req, res) => {
  const EmailId = req.body.EmailId;
  const userName = req.body.userName;
  const password = req.body.password;
  const pass = bcrypt.hashSync(password,6);
  const user = await Auth.findOne({
    where: {
      EmailId: req.body.EmailId,
      userName: req.body.userName,
    },
  });
  if (!user) {
    return res.status(404).json({
      message: "sign up first",
    });
  }
  if (user.get("Password") !== pass) {
    return res.status(404).json({
      message: "Password is incorrect",
    });
  }
  res.status(200).json({
    message: "Sign in sucessfull",
  });
};
