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

//Get Single  Post Router
router.get("/get/:id", getfeed);

//Get Multiple Post Router
router.get("/getall", getAllfeed);

//Create Single Post Router
router.post("/create", Name, Post, Description, createfeed);

//Create Multiple Post Router
router.post("/multiplecreate", createAllfeed);

//Update Single Post Router
router.put("/update", updatefeed);

//Update Multiple Post Router
router.put("/updateall", updateAllfeed);

//Delete Single Post Router
router.delete("/delete", deleteFeed);

//Delete Multiple Post Router
router.delete("/multipledelete", deleteAllfeed);

module.exports = router;
