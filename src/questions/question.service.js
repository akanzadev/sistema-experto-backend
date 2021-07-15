const Question = require("./question.model");

const getQuestions = async () => {
  return await Question.find();
};
const postQuestion = async ({ question, image, symptom }) => {
  const quiz = new Question({ question, image, symptom });
  return await quiz.save();
};

const updateQuestion = async (id, payload) => {
  return await Question.findByIdAndUpdate(id, payload, { new: true });
};

module.exports = { getQuestions, postQuestion, updateQuestion };
