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

/** GEt movie list */
const getMovieList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

module.exports = {
    createMovie,
    getMovieList
};