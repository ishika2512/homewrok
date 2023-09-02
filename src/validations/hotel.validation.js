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

// /** update hotel */
// const updateDetails ={
//     params: Joi.object().keys({
//     hotelid:Joi.string().trim(),
//     }),

//     body: Joi.objet().keys({
//         hotel_name: Joi.string().required().trim(),
//         hotel_type: Joi.string().required().trim(),
//         hotel_location: Joi.string().required().trim(),
//         room_type: Joi.string().required().trim(),
//         room_rent: Joi.number().integer().required()
//     }),
// };
module.exports = {
    createHotel,
    // updateDetails
};