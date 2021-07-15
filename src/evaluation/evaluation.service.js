const Evaluation = require("./evaluation.model");

const getEvaluations = async () => {
  return await Evaluation.find();
};
const getEvaluationFromUser = async (idUser) => {
  return await Evaluation.find({ user: idUser }).populate("user");
};
const postEvaluation = async ({ diagnostic, user }) => {
  const evaluation = new Evaluation({ diagnostic, user });
  return await evaluation.save();
};
module.exports = { postEvaluation, getEvaluations, getEvaluationFromUser };
