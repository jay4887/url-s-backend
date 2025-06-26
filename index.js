const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
// 8O1hh784OPw8M8TX

mongoose
  .connect(
    "mongodb+srv://jay4887:AOLOUzFbYiYOgVTR@cluster0.n6itcm5.mongodb.net/urlshortner"
  )
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Error connecting to DB"));

const app = express();
app.use(cors({ origin: "*" }));
// to support req.param,  req.query etc...
app.use(express.json());

//Routers
const authRouter = require("./routes/authRoutes");
const urlRouter = require("./routes/urlRoutes");
const urlController = require("./controllers/urlController");

app.use("/auth", authRouter);
app.use("/urls", urlRouter);
app.use("/:shortUrl", urlController.redirectUrl);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
