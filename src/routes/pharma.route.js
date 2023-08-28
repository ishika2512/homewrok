const express = require("express");
const { pharmaValidation } = require("../validations");
const { pharmaController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create pharma */
router.post(
    "/create-pharma",
    // validate(pharmaValidation.createPharma),
    pharmaController.createPharma
);

/** Get pharma list */
router.get(
    "/list",
    // validate(pharmaValidation.getPharmaList),
    pharmaController.getPharmaList
);

/** delete pharma */
router.delete(
    "/delete-pharma/:pharmaId",
    // validate(pharmaValidation.deletepharma),
    pharmaController.deletepharma
);
module.exports = router;
