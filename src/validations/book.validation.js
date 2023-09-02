const Joi = require("joi");

/** create book */
const createBook= {
    body: Joi.object().keys({
        book_name: Joi.string().required().trim(),
        book_desc: Joi.string().required().trim()
    }),
};

// /** update book */
// const updateDetails ={
//     params: Joi.object().keys({
//         bookid:Joi.string().trim(),
//     }),

//     body: Joi.objet().keys({
//         book_name:Joi.string().trim(),
//         book_desc: Joi.string().trim()
//     }),
// };

module.exports = {
    createBook,
    // updateDetails
};