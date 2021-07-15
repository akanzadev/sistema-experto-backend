const { logout, sigin } = require("./auth.controller");

const router = require("express").Router();

router.post("/auth/sigin", sigin);
router.post("/auth/logout", logout);

module.exports = router;
