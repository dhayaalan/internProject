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

router.get("/getfeed/:id", getfeed);

router.get("/getallfeed", getAllfeed);

router.post("/createfeed", Name, Post, Description, createfeed);

router.post("/createallfeed", createAllfeed);

router.put("/updatefeed", updatefeed);

router.put("/updateallfeed", updateAllfeed);

router.delete("/deletefeed", deleteFeed);

router.delete("/deleteallfeed", deleteAllfeed);

module.exports = router;
