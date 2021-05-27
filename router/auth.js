const express = require("express");
const AuthController = require("../controller/auth");
// const { erroradmin } = require("../middleware/isAuth");
const { Username, EmailId, Password } = require("../validation/auth");

const router = express.Router();

router.post("/signin", Username, EmailId, Password, AuthController.signIn);

router.get("/signOut", Username, EmailId, Password, AuthController.signOut);

module.exports = router;
