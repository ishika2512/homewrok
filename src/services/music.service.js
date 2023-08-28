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
    return Music.find({ $or: [{ is_active: true}]});
};

/**
 * Delete music
 * @param {ObjectId} musicId
 * @returns {Promise<User>}
 */
const deletemusic = async (musicId) => {
    return Music.findByIdAndDelete(musicId);
};

module.exports = {
    createMusic,
    getMusicList,
    deletemusic,
};