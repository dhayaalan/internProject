const express = require("express");
const { signUp, signOut } = require("../controller/auth");
// const { erroradmin } = require("../middleware/isAuth");
const { Username, EmailId, Password } = require("../validation/auth");

const router = express.Router();

router.post("/signup", Username, EmailId, Password, signUp);

router.get("/signOut", Username, EmailId, Password, signOut);

module.exports = router;
