const {
  getAll,
  createOne,
  getAllFromUser,
} = require("./evaluation.controller");

const router = require("express").Router();

router.get("/evaluations", getAll);
router.get("/evaluations/user/:id", getAllFromUser);
router.post("/evaluation", createOne);
module.exports = router;
