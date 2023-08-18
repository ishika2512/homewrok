const express = require("express");
const { categoryValidation } = require("../validations");
const { categoryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create category */
router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    categoryController.createCategory
);
  
/** Get category list */
router.get(
    "/list",
    validate(categoryValidation.getCategoryList),
    categoryController.getCategoryList
);
  
module.exports = router;
