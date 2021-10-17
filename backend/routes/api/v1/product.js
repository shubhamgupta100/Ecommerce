const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductDetail,
} = require("../../../controller/productController");

router.get("/", getAllProducts);
router.post("/new", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:id", getProductDetail);

module.exports = router;
