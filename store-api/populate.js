require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const products = require('./products.json')

const start = async () => {
  try {
    await connectDB(process.env.DB_URL);
    await Product.deleteMany();
    await Product.create(products)
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

start();
