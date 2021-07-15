const config = require("../config/config");
const jwt = require("jsonwebtoken");
const token = jwt.sign({ foo: "bar" }, config.jwt.SEED);

const verifyToken = (req, res, next) => {
  const bearer = req.headers["Authorization"];
  if (bearer) {
    const token = bearer.split(" ")[1];
    const verify = jwt.verify(token, config.jwt.SEED);
    req.user = verify;
    next();
  } else {
    return res.status(403).json({
      ok: false,
      message: "Not Authorization",
    });
  }
};

module.exports = verifyToken;
