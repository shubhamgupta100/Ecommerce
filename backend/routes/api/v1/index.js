const express = require("express");
const router = express.Router();
router.use("/products", require("./product"));
router.use("/", require("./user"));
module.exports = router;
