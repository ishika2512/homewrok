const express = require("express");
const categoyRoute = require("./category.route");

const router = express.Router();

router.use("/category", categoyRoute);
module.exports = router;