const express = require("express");
const { categoryController } = require("../controllers");

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
