const express = require("express");
const {
  getAllStaticProducts,
  getAllProducts,
} = require("../controllers/products");

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/static").get(getAllStaticProducts);

module.exports = router;