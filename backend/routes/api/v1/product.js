const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductDetail,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
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
router.get("/me/reviews", getProductReviews);
router.delete("/me/reviews", isAuthenticatedUser, deleteReview);

router.get(
  "/admin/products",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAdminProducts
);
module.exports = router;
