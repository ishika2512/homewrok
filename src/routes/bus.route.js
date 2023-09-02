const express = require("express");
const { busValidation } = require("../validations");
const { busController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create bus */
router.post(
    "/create-bus",
    validate(busValidation.createBus),
    busController.createBus
);

/** Get bus list */
router.get(
    "/list",
    // validate(busValidation.getBusList),
    busController.getBusList
);

/** delete bus */
router.delete(
    "/delete-bus/:busid",
    // validate(busValidation.DeleteBus),
    busController.deletebus
);

// /** bus details update by id*/
// router.put(
//     "/update-bus/:busId",
//     validate(busValidation.updateDetails),
//     busController.updateDetails
// );

module.exports = router;
