const Joi = require("joi");

/** create pharma */
const createPharma = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        agency_name: Joi.string().required().trim(),
        manufacture: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
        dosage: Joi.string().required().trim(),
        price: Joi.number().integer().required()
    }),
};

module.exports = {
    createPharma,
};