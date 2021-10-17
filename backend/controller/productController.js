const Product = require("../model/product");

// Create Product --> Admin
module.exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    msg: "Product is created",
    product,
  });
};

// Get All Product
module.exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  return res.status(200).json({
    msg: "success",
    products,
  });
};

// Get Product Detail
module.exports.getProductDetail = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      msg: "Product Does not exists",
    });
  }
  res.status(200).json({
    success: true,
    product,
  });
};

// Update Product --> Admin

module.exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      msg: "Product Updation is falied",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  return res.status(200).json({
    success: true,
    msg: "Product Updated successfully",
    product,
  });
};

// Delete Product -->Admin
module.exports.deleteProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      msg: "Product Does not exists",
    });
  }
  await product.remove();
  res.status(200).json({
    success: true,
    msg: "Product deleted Successfully",
  });
};
