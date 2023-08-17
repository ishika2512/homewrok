const express = require("express");
const categoyRoute = require("./category.route");

const router = express.Router();

router.use("/category", userRoute);
module.exports = router;