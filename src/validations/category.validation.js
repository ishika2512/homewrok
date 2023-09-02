const Joi = require("joi");

/** create category */
const createCategory = {
    body: Joi.object().keys({
        category_name: Joi.string().required().trim(),
        category_desc: Joi.string().required().trim(),
        category_price: Joi.number().integer().required()
    }),
};

// /** update category */
// const updateDetails ={
//     params: Joi.object().keys({
//         categoryid:Joi.string().trim(),
//     }),

//     body: Joi.objet().keys({
//         category_name: Joi.string().required().trim(),
//         category_desc: Joi.string().required().trim(),
//         category_price: Joi.number().integer().required()
//     }),
// };

module.exports = {
    createCategory,
    // updateDetails
};