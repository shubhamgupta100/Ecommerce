const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
  forgetPassword,
  resetPassword,
} = require("../../../controller/userController");
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.post("/password/forgot", forgetPassword);
router.put("/password/reset/:token", resetPassword);
module.exports = router;
