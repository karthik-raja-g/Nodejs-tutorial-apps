const mongoose = require("mongoose");
const process = require("process");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err, "Db connection error"));
