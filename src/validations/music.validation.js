const Joi = require("joi");

/** create music */
const createMusic = {
    body: Joi.object().keys({
        song_title: Joi.string().required().trim(),
        song_name: Joi.string().required().trim(),
        artists_name: Joi.string().required().trim(),
    }),
};

/** GEt music list */
const getMusicList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

module.exports = {
    createMusic,
    getMusicList
};