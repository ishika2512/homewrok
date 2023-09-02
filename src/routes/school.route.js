const express = require("express");
const { schoolValidation } = require("../validations");
const { schoolController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create scchool */
router.post(
    "/create-school",
    validate(schoolValidation.createSchool),
    schoolController.createSchool
);

/** Get school list */
router.get(
    "/list",
    // validate(schoolValidation.getSchoolList),
    schoolController.getSchoolList
);

/** delete school */
router.delete(
    "/delete-school/:schoolId",
    // validate(schoolValidation.deleteschool),
    schoolController.deleteschool
);

// /** school details update by id*/
// router.put(
//     "/update-school/:schoolId",
//     validate(schoolValidation.updateDetails),
//     schoolController.updateDetails
// );
module.exports = router;
