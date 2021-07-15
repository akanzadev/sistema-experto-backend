const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  symptom: {
    type: String,
    required: true,
  },
});

const questionSchema = mongoose.model("Question", Schema);

module.exports = questionSchema;
