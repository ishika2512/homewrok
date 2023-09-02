const express = require("express");
const { productValidation } = require("../validations");
const { productController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create product */
router.post(
    "/create-product",
    validate(productValidation.createProduct),
    productController.createProduct
);
  
/** Get product list */
router.get(
    "/list",
    // validate(productValidation.getProductList),
    productController.getProductList
);

/** delete product */
router.delete(
    "/delete-product/:productid",
    // validate(productValidation.DeleteProduct),
    productController.deleteproduct
);

// /** product details update by id*/
// router.put(
//     "/update-product/:productid",
//     validate(productValidation.updateDetails),
//     productController.updateDetails
// );

module.exports = router;
