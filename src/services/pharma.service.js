const { Pharma } = require("../model");

/**
 * Create Pharma
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createPharma = async (reqBody) => {
    return Pharma.create(reqBody);
};

/**
 * Get Pharma list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getPharmaList = async (filter, options) => {
    const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

    return Pharma.find(filter).skip(skip).limit(options.limit).select("-password");
};
module.exports = {
    createPharma,
    getPharmaList
};