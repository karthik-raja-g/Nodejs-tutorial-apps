require("dotenv").config();
const express = require("express");
const process = require("process");
const connectDB = require("./db/connect");
const errorHandler = require("./middlewares/errorHandler");

const tasks = require("./routes/tasks");

const PORT = process.env.SERVER_PORT;
const DB_URL = process.env.DB_URL;
const app = express();

app.use(express.json());
app.use(express.static('./public'))
app.use("/api/v1/tasks", tasks);
app.use(errorHandler)

const start = async () => {
  try {
    await connectDB(DB_URL);
    app.listen(PORT, () => {
      console.log(`Server up in port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
