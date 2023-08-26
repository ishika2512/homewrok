const { Music } = require("../model");

/**
 * Create Music
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createMusic = async (reqBody) => {
    return Music.create(reqBody);
};

/**
 * Get Music list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getMusicList = async (filter, options) => {
    const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

    return Music.find(filter).skip(skip).limit(options.limit).select("-password");
};
module.exports = {
    createMusic,
    getMusicList
};