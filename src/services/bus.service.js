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
    return Bus.find({ $or: [{ is_active: true}]});
};

/**
 * Delete bus
 * @param {ObjectId} busId
 * @returns {Promise<User>}
 */
    const deletebus = async (busId) => {
    return Bus.findByIdAndDelete(busId);
};
module.exports = {
    createBus,
    getBusList,
    deletebus
};