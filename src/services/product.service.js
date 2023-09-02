const { Product } = require("../model");

/**
 * Create Product
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
    const createProduct = async (reqBody) => {
    return Product.create(reqBody);
};

/**
 * Get Product list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
    const getProductList = async (filter, options) => {
    return Product.find({ $or: [{ is_active: true}]});
};

/**
 * Delete pharma
 * @param {ObjectId} productId
 * @returns {Promise<User>}
 */
const deleteproduct = async (productId) => {
    return Product.findByIdAndDelete(productId);
};

module.exports = {
    createProduct,
    getProductList,
    deleteproduct,
};