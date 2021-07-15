const {
  getQuestions,
  postQuestion,
  updateQuestion,
} = require("./question.service");

const getAll = (req, res) => {
  getQuestions()
    .then((questions) => {
      return res.status(200).json({
        ok: true,
        questions,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        ok: false,
        error,
      });
    });
};

const createOne = (req, res) => {
  postQuestion(req.body)
    .then((question) => {
      return res.status(200).json({
        ok: true,
        question,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        ok: false,
        error,
        message: error.message,
      });
    });
};

const updateOne = (req, res) => {
  updateQuestion(req.params.id, req.body)
    .then((question) => {
      return res.status(200).json({
        ok: true,
        question,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        ok: false,
        error,
        message: error.message,
      });
    });
};

module.exports = { getAll, createOne, updateOne };
