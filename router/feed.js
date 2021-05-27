const express = require("express");
const {
  getfeed,
  getAllfeed,
  createAllfeed,
  createfeed,
  updatefeed,
  updateAllfeed,
} = require("../controller/feed");
// const { erroradmin } = require("../middleware/isAuth");
const { Name, Post, Description } = require("../validation/feed");

const router = express.Router();

router.get("/getfeed/:id", getfeed);

router.get("/getallfeed", getAllfeed);

router.post(
  "/createfeed",
  // erroradmin,
  Name,
  Post,
  Description,
  createfeed
);

router.post("/createallfeed", createAllfeed);

router.put("/updatefeed", updatefeed);

router.put("/updateAllfeed", updateAllfeed);

module.exports = router;
