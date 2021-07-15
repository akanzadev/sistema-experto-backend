const { logoutService, signinService } = require("./auth.service");

const sigin = (req, res) => {
  signinService(req.body)
    .then((auth) => {
      return res.status(200).json({
        ok: true,
        auth,
      });
    })
    .catch((error) => {
      return res.status(401).json({
        ok: false,
        message: error.message,
      });
    });
};

const logout = (req, res) => {
  logoutService(req.body)
    .then((user) => {
      return res.status(200).json({
        ok: true,
        user,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        ok: false,
        message: error.message,
      });
    });
};

module.exports = { sigin, logout };
