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
    const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Stationary.find(filter).skip(skip).limit(options.limit).select("-password");
};
module.exports = {
    createStationary,
    getStationaryList
};