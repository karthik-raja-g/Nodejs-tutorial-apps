class TaskManagerError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createTaskManagerError = (message, statuCode) => {
  return new TaskManagerError(message, statusCode);
};

module.exports = {
  TaskManagerError,
  createTaskManagerError,
};
