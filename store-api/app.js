console.log("04 Store API");
require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
require('express-async-errors')

const errorMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");
const productsRouter = require('./routes/products');
const PORT = process.env.SERVER_PORT;
const DB_URL = process.env.DB_URL;
const app = express();

app.use("/api/v1/products",productsRouter)
// app.get("/", (req, res) =>
// res.send('<h1>Stores api</h1><a href="/api/v1/products">Products</a>')
// );

// app.get('/hello', (req,res) => res.send('hello'))

app.use(errorMiddleware);
app.use(notFoundMiddleware);

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
