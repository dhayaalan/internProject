const express = require("express");
const { signUp, signIn } = require("../controller/auth");
// const { erroradmin } = require("../middleware/isAuth");
const { Username, EmailId, Password } = require("../validation/auth");

const router = express.Router();

router.post("/signup", Username, EmailId, Password, signUp);

router.post("/signin", Username, EmailId, Password, signIn);

module.exports = router;
