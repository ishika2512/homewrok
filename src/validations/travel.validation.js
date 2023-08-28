const Joi = require("joi");

/** create travel */
const createTravel = {
    body: Joi.object().keys({
        travel_agency: Joi.string().required().trim(),
        traveler_name: Joi.string().required().trim(),
        booking_confirmation: Joi.string().required().trim(),
        travel_place: Joi.string().required().trim(),
        travel_package: Joi.number().integer().required(),
        hotel_name: Joi.string().required().trim()
    }),
};

/** GEt travel list */
const getTravelList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

module.exports = {
    createTravel,
    getTravelList
};