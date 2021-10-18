const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your name !"],
    maxlength: [30, "Name can not exceed 30 character"],
    minlength: [4, "Name can not be less that 4 character"],
  },
  email: {
    type: String,
    required: [true, "Please Enter your email"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email !"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your password !"],
    minlength: [4, "Password can not be less than 4 character"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Dates,
});
module.exports = mongoose.model("User", userSchema);
