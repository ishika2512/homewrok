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
    const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

    return Jewellery.find(filter).skip(skip).limit(options.limit).select("-password");
};
module.exports = {
    createJewellery,
    getJewelleryList
};