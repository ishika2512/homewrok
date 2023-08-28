const { Jewellery } = require("../model");

/**
 * Create jewellery
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createJewellery = async (reqBody) => {
    return Jewellery.create(reqBody);
};

/**
 * Get jewellery list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getJewelleryList = async (filter, options) => {
    return Jewellery.find({ $or: [{ is_active: true}]});
};

/**
 * Delete jewellery
 * @param {ObjectId} jewelleryId
 * @returns {Promise<User>}
 */
const deletejewellery = async (jewelleryId) => {
    return Jewellery.findByIdAndDelete(jewelleryId);
};
module.exports = {
    createJewellery,
    getJewelleryList,
    deletejewellery,
};