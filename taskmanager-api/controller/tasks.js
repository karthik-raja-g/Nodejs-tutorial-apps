const Task = require('../models/Task');
const getTasks = (req, res) => {
  res.send({ data: [{ name: "john" }, { name: "alice" }] });
};

const createTask = async (req,res) => {
  console.log(req.body, "body");
  const task = await Task.create(req.body);
  res.status(201).json({task})
};
const getSingleTask = () => {};
const updateTask = () => {};
const deleteTask = () => {};

module.exports = {
  getTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
