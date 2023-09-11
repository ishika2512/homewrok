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


module.exports = {
    createTravel,
};