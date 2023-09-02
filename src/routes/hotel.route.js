const express = require("express");
const { hotelValidation } = require("../validations");
const { hotelController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create hotel */
router.post(
    "/create-hotel",
    validate(hotelValidation.createHotel),
    hotelController.createHotel
);

/** Get hotel list */
router.get(
    "/list",
    // validate(hotelValidation.getHotelList),
    hotelController.getHotelList
);

/** delete hotel */
router.delete(
    "/delete-hotel/:hotelId",
    // validate(hotelValidation.deletehotel),
    hotelController.deletehotel
);

// /** hotel details update by id*/
// router.put(
//     "/update-hotel/:hotelId",
//     validate(hotelValidation.updateDetails),
//     hotelController.updateDetails
// );
module.exports = router;
