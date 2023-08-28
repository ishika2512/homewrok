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
    return Pharma.find({ $or: [{ is_active: true}]});
};

/**
 * Delete pharma
 * @param {ObjectId} pharmaId
 * @returns {Promise<User>}
 */
const deletepharma = async (pharmaId) => {
    return Pharma.findByIdAndDelete(pharmaId);
};

module.exports = {
    createPharma,
    getPharmaList,
    deletepharma,
};