const getMyProfile = (req, res, next) => {
  res.send({username:req.user.username});
};

module.exports = {
  getMyProfile,
};
