const express = require("express");
const { jewelleryValidation } = require("../validations");
const { jewelleryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create jewellery */
router.post(
    "/create-jewellery",
    // validate(jewelleryValidation.createJewellery),
    jewelleryController.createJewellery
);

/** Get jewellery list */
router.get(
    "/list",
    // validate(jewelleryValidation.getJewelleryList),
    jewelleryController.getJewelleryList
);

/** delete bus */
router.delete(
    "/delete-jewellery/:jewelleryId",
    // validate(jewelleryValidation.deletejewellery),
    jewelleryController.deletejewellery
);
module.exports = router;
