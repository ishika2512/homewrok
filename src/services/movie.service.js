const { Movie } = require("../model");

/**
 * Create Movie
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createMovie = async (reqBody) => {
    return Movie.create(reqBody);
};

/**
 * Get movie list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getMovieList = async (filter, options) => {
    const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Movie.find(filter).skip(skip).limit(options.limit).select("-password");
};
module.exports = {
    createMovie,
    getMovieList
};