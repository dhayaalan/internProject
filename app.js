const express = require("express");
const FeedRouter = require("./router/feed");
const AuthRouter = require("./router/auth");
const seq = require("./util/database");

const app = express();

app.use(express.json());

app.use("/feed", FeedRouter);
app.use("/auth", AuthRouter);

seq
  .sync({ force: false, alter: true })
  .then((result) => app.listen(4000, () => console.log("App Listening")))
  .catch((err) => {
    console.log(err);
  });
