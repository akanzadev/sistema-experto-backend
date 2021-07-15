const mongoose = require("mongoose");
const config = require("../config/config");

const getConnection = async () => {
  try {
    await mongoose.connect(config.db.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("DB conectada con exito");
  } catch (error) {
    console.log("Error al conectarse a DB", error);
  }
};

module.exports = { getConnection };
