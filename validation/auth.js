const { body } = require("express-validator");
const { validator } = require("validator");

const Username = [
  body("userName")
    .not()
    .trim()
    .isEmpty()
    .isLength({ min: 2, max: 10 })
    .withMessage("id must be min of 2 character and max of 15 character:"),
];

const EmailId = [
  body("EmailId")
    .not()
    .trim()
    .isEmpty()
    .isEmail()
    .isLength({ min: 10, max: 30 })
    .withMessage("email should not be more than 30 character:"),
];

const Password = [
  body("Password")
    .not()
    .trim()
    .isEmpty()
    .isAlphanumeric()
    .isLength({ min: 2, max: 8 })
    .withMessage(" password min of 2 character and max of 8 character:"),
];

module.exports = { Username, EmailId, Password };
