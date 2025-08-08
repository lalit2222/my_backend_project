const express = require("express");
const { registerUser, loginUSer } = require("../controllers/auth.controller");
const router = express();

router.post("/register", registerUser);
router.post("/login", loginUSer);

module.exports = router;
