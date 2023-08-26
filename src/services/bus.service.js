const { Bus } = require("../model");

/**
 * Create bus
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createBus = async (reqBody) => {
    return Bus.create(reqBody);
};

/**
 * Get bus list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getBusList = async (filter, options) => {
    const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

    return Bus.find(filter).skip(skip).limit(options.limit).select("-password");
};
module.exports = {
    createBus,
    getBusList
};