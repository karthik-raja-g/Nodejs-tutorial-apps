const express = require("express");
const process = require("process");
require('dotenv').config()

const PORT = process.env.SERVER_PORT;
const app = express();

app.get("/", (req, res) => res.send("Hello world"));
app.listen(PORT, () => {
  console.log(`Server up in port ${PORT}`);
});
