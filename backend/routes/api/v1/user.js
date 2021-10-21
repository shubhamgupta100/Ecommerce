const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
  forgetPassword,
  resetPassword,
  getUserDetail,
  updatePassword,
} = require("../../../controller/userController");
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../../../middleware/auth");
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.post("/password/forgot", forgetPassword);
router.put("/password/reset/:token", resetPassword);
router.get("/me", isAuthenticatedUser, getUserDetail);
router.put("/updatePassword", isAuthenticatedUser, updatePassword);
module.exports = router;
