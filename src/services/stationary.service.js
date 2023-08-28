const { Stationary } = require("../model");
/**
 * Create Stationary
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createStationary = async (reqBody) => {
    return Stationary.create(reqBody);
};
/**
 * Get Stationary list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getStationaryList = async (filter, options) => {
    return Stationary.find({ $or: [{ is_active: true}]});
};

/**
 * Delete stationary
 * @param {ObjectId} stationaryId
 * @returns {Promise<User>}
 */
const deletestationary = async (stationaryId) => {
    return Stationary.findByIdAndDelete(stationaryId);
};

module.exports = {
    createStationary,
    getStationaryList,
    deletestationary,
};