const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../../../middleware/auth");
const {
  processPayment,
  sendStripeApiKey,
} = require("../../../controller/paymentController");
router.post("/payment/process", isAuthenticatedUser, processPayment);
router.get("/stripeApiKey", isAuthenticatedUser, sendStripeApiKey);

module.exports = router;
