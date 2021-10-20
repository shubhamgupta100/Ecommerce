const express = require("express");
const router = express.Router();
router.use("/products", require("./product"));
router.use("/user", require("./user"));
module.exports = router;
