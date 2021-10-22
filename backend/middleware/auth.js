const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../model/user");

module.exports.isAuthenticatedUser = catchAsyncErrors(
  async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
      return next(new ErrorHandler("Please login to continue!"));
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decodedData.id);
    // console.log(req.user.role);
    next();
  }
);

module.exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role : ${req.user.role} is allowed to access this resource !`,
          403
        )
      );
    }
    next();
  };
};
