const express = require("express");
const router = express.Router();
router.use("/products", require("./product"));
router.use("/", require("./order"));
router.use("/", require("./user"));
router.use("/", require("./payment"));
module.exports = router;
