const Joi = require("joi");

/** create product */
const createProduct = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_id: Joi.number().integer().required(),
        product_quantity: Joi.number().integer().required(),
        product_price: Joi.number().integer().required()
    }),
};

module.exports = {
    createProduct,
};