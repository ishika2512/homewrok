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

module.exports = {
    createBus,
};