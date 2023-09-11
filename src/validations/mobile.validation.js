const Joi = require("joi");

// create-mobile
const createmobile = {
    body: Joi.object().keys({
        mobile_name: Joi.string().required().trim(),
        mobile_desc: Joi.string().required().trim(),
    }),
};

module.exports = {
    createmobile
}