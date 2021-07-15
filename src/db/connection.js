const mongoose = require("mongoose");

const getConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/sistemainteligente", {
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
