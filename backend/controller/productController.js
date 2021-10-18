const Product = require("../model/product");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");

// Create Product --> Admin
module.exports.createProduct = catchAsyncErrors(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    message: "Product is created",
    product,
  });
});

// Get All Product
module.exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const productCount = await Product.countDocuments();
  const resultPerPage = 5;
  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  // const products = await Product.find();
  const products = await apiFeatures.query;
  return res.status(200).json({
    success: true,
    productCount,
    products,
  });
});

// Get Product Detail
module.exports.getProductDetail = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});

// Update Product --> Admin

module.exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  return res.status(200).json({
    success: true,
    message: "Product Updated successfully",
    product,
  });
});

// Delete Product -->Admin
module.exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product deleted Successfully",
  });
});
