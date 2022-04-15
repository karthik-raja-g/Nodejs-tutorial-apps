const Task = require("../models/Task");
const asyncWrapper = require("../middlewares/async");
const { TaskManagerError } = require("../customErrors");

const getTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });

  if (!task) {
    // throw new TaskManagerError(`No task for id ${taskId}`, 404);
    // OR
    return next(new TaskManagerError(`No task for id ${taskId}`, 404))
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) throw new TaskManagerError(`No task for id ${taskId}`, 404);

  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndDelete({ _id: taskId });
  if (!task) throw new TaskManagerError(`No task for id ${taskId}`, 404);

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
