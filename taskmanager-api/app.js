const express = require("express");
const process = require("process");
require("dotenv").config();
require('./db/connect');

const tasks = require("./routes/tasks");

const PORT = process.env.SERVER_PORT;
const app = express();

app.use(express.json());

app.use("/api/v1/tasks", tasks);

// app.get("/", (req, res) => res.send("Hello world"));
app.listen(PORT, () => {
  console.log(`Server up in port ${PORT}`);
});
