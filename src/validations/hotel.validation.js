const Joi = require("joi");

/** create hotel */
const createHotel = {
    body: Joi.object().keys({
        hotel_name: Joi.string().required().trim(),
        hotel_type: Joi.string().required().trim(),
        hotel_location: Joi.string().required().trim(),
        room_type: Joi.string().required().trim(),
        room_rent: Joi.number().integer().required()
    }),
};

/** GEt hotel list */
const getHotelList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

module.exports = {
    createHotel,
    getHotelList
};