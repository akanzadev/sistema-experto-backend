const {
  getEvaluations,
  getEvaluationFromUser,
  postEvaluation,
} = require("./evaluation.service");

const getAll = (req, res) => {
  getEvaluations()
    .then((evaluations) => {
      return res.status(200).json({
        ok: true,
        evaluations,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        ok: false,
        message: error.message,
      });
    });
};
const getAllFromUser = (req, res) => {
  getEvaluationFromUser(req.params.id)
    .then((evaluations) => {
      return res.status(200).json({
        ok: true,
        evaluations,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        ok: false,
        message: error.message,
      });
    });
};
const createOne = (req, res) => {
  postEvaluation(req.body)
    .then((evaluation) => {
      return res.status(200).json({
        ok: true,
        evaluation,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        ok: false,
        message: error.message,
      });
    });
};

module.exports = { getAll, createOne, getAllFromUser };
