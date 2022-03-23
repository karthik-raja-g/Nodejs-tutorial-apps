const express = require("express");
const { getTasks } = require("../controller/tasks");
const router = express.Router();

router.get("/", getTasks);

module.exports = router;
