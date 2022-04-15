const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      // not passing error in next - express will handle error internally
      next(error);
    }
  };
};

module.exports = asyncWrapper;
