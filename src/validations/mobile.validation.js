const Joi = require("joi");

// create-mobile
const createmobile = {
    body: Joi.object().keys({
        company_name: Joi.string().required().trim(),
        mobile_model: Joi.string().required().trim(),
        device_name: Joi.string().required().trim(),
        mobile_desc: Joi.string().required().trim(),
        mobile_storage: Joi.string().required().trim(),
        mobile_price: Joi.number().integer().required(),
        bill_number: Joi.number().integer().required(),
        total_amount: Joi.number().integer().required()
    }),
};

module.exports = {
    createmobile
}