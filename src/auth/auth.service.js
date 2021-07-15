const User = require("../user/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const signinService = async ({ email, password }) => {
  const user = await User.findOne({ email });
  console.log(user);
  if (user) {
    const isCorrect = await bcrypt.compare(password, user.password);
    if (isCorrect) {
      const token = jwt.sign({ id: user._id }, config.jwt.SEED);
      return { name: user.name, dni: user.dni, roll: user.roll, token };
    } else {
      throw new Error("Email o contraseña incorrectos");
    }
  } else {
    throw new Error("Email o contraseña incorrectos");
  }
};

const logoutService = async ({ email, password }) => {
  const user = new User({ email, password, name, lastname, dni, age });
  return await user.save();
};

module.exports = { signinService, logoutService };
