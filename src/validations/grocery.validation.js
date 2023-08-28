const Joi = require("joi");

/** create grocery */
const createGrocery = {
    body: Joi.object().keys({
        grocery_name: Joi.string().required().trim(),
        grocery_category: Joi.string().required().trim(),
        grocery_quanty: Joi.number().integer().required(),
        grocery_price: Joi.number().integer().required()
    }),
};

/** GEt grocery list */
const getGroceryList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(),
        sortBy: Joi.string().trim().allow(),
        limit: Joi.number().integer().allow(),
        page: Joi.number().integer().allow(""),
    }),
};

module.exports = {
    createGrocery,
    getGroceryList
};