const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductDetail,
  createProductReview,
} = require("../../../controller/productController");
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../../../middleware/auth");

router.get("/", getAllProducts);
router.post(
  "/new",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  createProduct
);
router.put("/:id", isAuthenticatedUser, authorizeRoles("admin"), updateProduct);
router.delete(
  "/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteProduct
);
router.get("/:id", getProductDetail);
router.put("/me/reviews", isAuthenticatedUser, createProductReview);
module.exports = router;
