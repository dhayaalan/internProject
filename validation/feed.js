const { body } = require("express-validator");
const { validator } = require("validator");

const Name = [
  body("Name")
    .not()
    .trim()
    .isEmpty()
    .isLength({ min: 2, max: 10 })
    .withMessage("id must be min of 2 character and max of 15 character:"),
];

const Post = [
  body("Post")
    .not()
    .trim()
    .isEmpty()
    .isLength({ min: 2, max: 10 })
    .withMessage("id must be min of 2 character and max of 15 character:"),
];

const Description = [
  body("description")
    .not()
    .trim()
    .isEmpty()
    .isLength({ min: 10, max: 255 })
    .withMessage("id must be min of 10 character and max of 255 character:"),
];

module.exports = { Name, Post, Description };
