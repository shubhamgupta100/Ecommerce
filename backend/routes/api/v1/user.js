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
  updateProfile,
  getAllUser,
  getSingleUser,
} = require("../../../controller/userController");
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../../../middleware/auth");
router.post("/user/register", register);
router.post("/user//login", login);
router.get("/user/logout", logout);
router.post("/user/password/forgot", forgetPassword);
router.put("/user/password/reset/:token", resetPassword);
router.get("/user/me", isAuthenticatedUser, getUserDetail);
router.put("/updatePassword", isAuthenticatedUser, updatePassword);
router.put("/updateProfile", isAuthenticatedUser, updateProfile);
router.get(
  "/admin/users",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllUser
);
router.get(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getSingleUser
);
module.exports = router;
