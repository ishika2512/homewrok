const { Grocery } = require("../model");

/**
 * Create grocery
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createGrocery = async (reqBody) => {
    return Grocery.create(reqBody);
};

/**
 * Get grocery list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getGroceryList = async (filter, options) => {
    const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

    return Grocery.find(filter).skip(skip).limit(options.limit).select("-password");
};
module.exports = {
    createGrocery,
    getGroceryList
};