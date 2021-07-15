const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 65,
  },
  roll: {
    type: String,
    enum: ["@admin/roll", "@user/roll"],
    default: "@user/roll",
  },
});

Schema.pre("save", function (next) {
  const user = this;
  // Saltos de encriptado
  const salt = bcrypt.genSaltSync(10);
  // Encriptando contraseña
  const hash = bcrypt.hashSync(user.password, salt);
  // Enviando password con hash
  user.password = hash;
  next();
});

Schema.methods.toJSON = function () {
  const { __v, password, ...user } = this.toObject();
  return user;
};

const userSchema = mongoose.model("User", Schema);

module.exports = userSchema;
