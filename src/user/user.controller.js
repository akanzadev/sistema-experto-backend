const { getUsers, createUser } = require("./user.service");

const getAll = (req, res) => {
  getUsers()
    .then((users) => {
      return res.status(200).json({
        ok: true,
        users,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        ok: false,
        error,
      });
    });
};

const createOne = (req, res) => {
  console.log(req.body);
  createUser(req.body)
    .then((user) => {
      return res.status(200).json({
        ok: true,
        user,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        ok: false,
        error,
        message: error.message,
      });
    });
};

module.exports = { getAll, createOne };
