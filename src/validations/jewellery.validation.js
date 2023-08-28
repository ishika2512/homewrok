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

/** GEt jewellery list */
const getJewelleryList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

module.exports = {
    createJewellery,
    getJewelleryList
};