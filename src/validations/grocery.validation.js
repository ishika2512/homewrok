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

// /** update grocery */
// const updateDetails ={
//     params: Joi.object().keys({
//         groceryid:Joi.string().trim(),
//     }),

//     body: Joi.objet().keys({
//         grocery_name: Joi.string().required().trim(),
//         grocery_category: Joi.string().required().trim(),
//         grocery_quanty: Joi.number().integer().required(),
//         grocery_price: Joi.number().integer().required()
//     }),
// };
module.exports = {
    createGrocery,
    // updateDetails
};