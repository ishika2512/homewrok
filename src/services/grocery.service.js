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
    return Grocery.find({ $or: [{ is_active: true}]});
};

/**
 * Delete grocery
 * @param {ObjectId} groceryId
 * @returns {Promise<User>}
 */
    const deletegrocery = async (groceryId) => {
    return Grocery.findByIdAndDelete(groceryId);
};

module.exports = {
    createGrocery,
    getGroceryList,
    deletegrocery,
};