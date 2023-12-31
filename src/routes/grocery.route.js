const express = require("express");
const { groceryValidation } = require("../validations");
const { groceryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create grocery */
router.post(
    "/create-grocery",
    // validate(groceryValidation.createGrocery),
    groceryController.createGrocery
);

/** Get grocery list */
router.get(
    "/list",
    // validate(groceryValidation.getGroceryList),
    groceryController.getGroceryList
);
/** delete grocery */
router.delete(
    "/delete-grocery/:groceryId",
    // validate(groceryValidation.DeleteGrocery),
    groceryController.deletegrocery
);
module.exports = router;
