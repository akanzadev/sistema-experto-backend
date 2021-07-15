const User = require("./user.model");

const getUsers = async () => {
  return await User.find({ roll: "@user/roll" });
};

const createUser = async ({
  email,
  password,
  name,
  lastname,
  dni,
  age,
  roll,
}) => {
  const user = new User({ email, password, name, lastname, dni, age, roll });
  return await user.save();
};

module.exports = { getUsers, createUser };
