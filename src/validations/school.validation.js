const Joi = require("joi");

/** create school */
const createSchool = {
    body: Joi.object().keys({
        school_name: Joi.string().required().trim(),
        school_location: Joi.string().required().trim(),
        school_branch: Joi.string().required().trim(),
        chairman_name: Joi.string().required().trim(),
        pricipal_name: Joi.string().required().trim(),
        index_number: Joi.number().integer().required()
    }),
};

module.exports = {
    createSchool,
};