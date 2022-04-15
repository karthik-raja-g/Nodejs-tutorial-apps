const { TaskManagerError } = require("../customErrors");

const errorHandler = (err, req, res, next) => {
  if (err instanceof TaskManagerError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(500).json({ msg: "something went wrong" });
};

module.exports = errorHandler;
