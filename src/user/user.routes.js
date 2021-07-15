const { getAll, createOne } = require("./user.controller");

const router = require("express").Router();

router.get("/users", getAll);
router.post("/user", createOne);

module.exports = router;
