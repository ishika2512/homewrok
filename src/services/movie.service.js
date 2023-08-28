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
    return Movie.find({ $or: [{ is_active: true}]});
};

/**
 * Delete movie
 * @param {ObjectId} movieId
 * @returns {Promise<User>}
 */
    const deletemovie = async (movieId) => {
    return Movie.findByIdAndDelete(movieId);
};

module.exports = {
    createMovie,
    getMovieList,
    deletemovie,
};