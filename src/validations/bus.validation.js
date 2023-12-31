const Joi = require("joi");

/** create bus */
const createBus = {
    body: Joi.object().keys({
        bus_name: Joi.string().required().trim(),
        bus_route: Joi.string().required().trim(),
        driver_name: Joi.string().required().trim(),
        ticket_price: Joi.number().integer().required()
    }),
};

/** GEt bus list */
const getBusList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

module.exports = {
    createBus,
    getBusList
};