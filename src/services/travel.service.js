const { Travel } = require("../model");

/**
 * Create Travel
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createTravel = async (reqBody) => {
    return Travel.create(reqBody);
};

/**
 * Get Travel list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getTravelList = async (filter, options) => {
    const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Travel.find(filter).skip(skip).limit(options.limit).select("-password");
};
module.exports = {
    createTravel,
    getTravelList
};