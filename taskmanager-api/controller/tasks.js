const Task = require("../models/Task");
const asyncWrapper = require("../middlewares/async");

const getTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getSingleTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) return res.status(404).json({ message: "No data found" });
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) return res.status(404).json({ message: "No data found" });
  res.status(200).json({ task });
  // const task = await Task.create(req.body);
  // res.status(201).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndDelete({ _id: taskId });
  if (!task) return res.status(404).json({ message: "No data found" });
  res.status(200).json({ task });
  // const task = await Task.create(req.body);
  // res.status(201).json({ task });
});

module.exports = {
  getTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
