const Joi = require("joi");

/** create music */
const createMusic = {
    body: Joi.object().keys({
        song_title: Joi.string().required().trim(),
        song_name: Joi.string().required().trim(),
        artists_name: Joi.string().required().trim(),
    }),
};

// /** update music */
// const updateDetails ={
//     params: Joi.object().keys({
//     musicid:Joi.string().trim(),
//     }),

//     body: Joi.objet().keys({
//         song_title: Joi.string().required().trim(),
//         song_name: Joi.string().required().trim(),
//         artists_name: Joi.string().required().trim(),
//     }),
// };
module.exports = {
    createMusic,
    // updateDetails
};