const express = require("express");
const { stationaryValidation } = require("../validations");
const { stationaryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create stationary */
router.post(
    "/create-stationary",
    // validate(stationaryValidation.createStationary),
    stationaryController.createStationary
);

/** Get stationary list */
router.get(
    "/list",
    // validate(stationaryValidation.getStationaryList),
    stationaryController.getStationaryList
);

/** delete stationary */
router.delete(
    "/delete-stationary/:stationaryId",
    // validate(stationaryValidation.deletestationary),
    stationaryController.deletestationary
);
module.exports = router;
