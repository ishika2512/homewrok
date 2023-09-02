const express = require("express");
const categoyRoute = require("./category.route");
const busRoute = require("./bus.route");
const hotelRoute = require("./hotel.route");
const stationaryRoute = require("./stationary.route");
const schoolRoute = require("./school.route");
const jewelleryRoute = require("./jewellery.route");
const movieRoute = require("./movie.route");
const musicRoute = require("./music.route");
const pharmaRoute = require("./pharma.route");
const groceryRoute = require("./grocery.route");
const travelRoute = require("./travel.route");
const productRoute = require("./product.route")
const router = express.Router();

router.use("/category", categoyRoute);
router.use("/bus", busRoute);
router.use("/hotel", hotelRoute);
router.use("/stationary", stationaryRoute);
router.use("/school", schoolRoute);
router.use("/jewellery", jewelleryRoute);
router.use("/movie", movieRoute);
router.use("/music", musicRoute);
router.use("/pharma", pharmaRoute);
router.use("/grocery", groceryRoute);
router.use("/travel", travelRoute);
router.use("/product",productRoute);
module.exports = router;