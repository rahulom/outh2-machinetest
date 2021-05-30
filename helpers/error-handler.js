const jsonErrorHandler = async (err, req, res, next) => {
  res.status(500).send(err);
};

module.exports = {
  jsonErrorHandler,
};
