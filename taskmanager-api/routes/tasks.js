const express = require("express");
const {
  getTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");
const router = express.Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;
