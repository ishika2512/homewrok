const Joi = require("joi");

/** create jewellery */
const createJewellery = {
    body: Joi.object().keys({
        jewellery_name: Joi.string().required().trim(),
        jewellery_type: Joi.string().required().trim(),
        jewellery_materials: Joi.string().required().trim(),
        bill_number: Joi.string().required().trim(),
        total_amount: Joi.number().integer().required()
    }),
};

module.exports = {
    createJewellery,
};