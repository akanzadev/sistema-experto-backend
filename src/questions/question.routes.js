const { getAll, createOne, updateOne } = require("./question.controller");

const router = require("express").Router();

router.get("/questions", getAll);
router.post("/questions", createOne);
router.patch("/question/:id", updateOne);

module.exports = router;
