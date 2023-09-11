const Joi = require("joi");

/** create movie */
const createMovie = {
    body: Joi.object().keys({
        movie_name: Joi.string().required().trim(),
        directed_by: Joi.string().required().trim(),
        actor_name: Joi.string().required().trim(),
        actress_name: Joi.string().required().trim(),
        ticket_price: Joi.number().integer().required()
    }),
};

module.exports = {
    createMovie,
};