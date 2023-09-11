const express = require("express");
const { mobileValidation } = require("../validations");
const { mobileController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create mobile
router.post(
    "/create-mobile",
    validate(mobileValidation.createmobile),
    mobileController.createmobile
);

// mobile list
router.get(
    "/list",
    mobileController.mobileList
);

// delete-mobile
router.delete(
    "/delete/:mobileId",
    mobileController.deleteRecord
);

// get mobile by id
router.get(
    "/get-details/:mobileId",
    mobileController.getmobileDetails
);

// update mobile by id
router.put(
    "/update-mobile/:mobileId",
    mobileController.updatemobile
);

module.exports = router;
