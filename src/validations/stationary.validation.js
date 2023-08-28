const Joi = require("joi");

/** create stationary */
const createStationary = {
    body: Joi.object().keys({
        stationary_name: Joi.string().required().trim(),
        owner_name: Joi.string().required().trim(),
        stationary_location: Joi.string().required().trim(),
        item_name: Joi.string().required().trim(),
        item_quantity: Joi.number().integer().required(),
        item_price: Joi.number().integer().required()
    }),
};

/** GEt stationary list */
const getStationaryList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

module.exports = {
    createStationary,
    getStationaryList
};