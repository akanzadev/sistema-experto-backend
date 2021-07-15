const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    diagnostic: {
      type: String,
      required: true,
    },
    user: { type: mongoose.Schema.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const evaluationSchema = mongoose.model("Evaluation", Schema);

module.exports = evaluationSchema;
