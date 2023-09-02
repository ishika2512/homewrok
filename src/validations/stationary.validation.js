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

// /** update stationary */
// const updateDetails ={
//     params: Joi.object().keys({
//     stationaryid:Joi.string().trim(),
//     }),

//     body: Joi.objet().keys({
//         stationary_name: Joi.string().required().trim(),
//         owner_name: Joi.string().required().trim(),
//         stationary_location: Joi.string().required().trim(),
//         item_name: Joi.string().required().trim(),
//         item_quantity: Joi.number().integer().required(),
//         item_price: Joi.number().integer().required()
//     }),
// };
module.exports = {
    createStationary,
    // updateDetails
};