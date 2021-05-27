const express = require("express");
const {
  getfeed,
  getAllfeed,
  createAllfeed,
  createfeed,
  updatefeed,
  updateAllfeed,
  deleteFeed,
  deleteAllfeed,
} = require("../controller/feed");

const { Name, Post, Description } = require("../validation/feed");

const router = express.Router();

router.get("/get/:id", getfeed);

router.get("/getall", getAllfeed);

router.post("/create", Name, Post, Description, createfeed);

router.post("/createall", createAllfeed);

router.put("/update", updatefeed);

router.put("/updateall", updateAllfeed);

router.delete("/delete", deleteFeed);

router.delete("/deleteall", deleteAllfeed);

module.exports = router;
