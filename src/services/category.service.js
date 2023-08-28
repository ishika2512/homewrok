const { Category } = require("../model");
/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
    const createCategory = async (reqBody) => {
    return Category.create(reqBody);
};
/**
 * Get category list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
    const getCategoryList = async (filter, options) => {
    return Category.find({ $or: [{ is_active: true}]});
};

/**
 * Delete category
 * @param {ObjectId} categoryId
 * @returns {Promise<User>}
 */
    const deletecategory = async (categoryId) => {
    return Category.findByIdAndDelete(categoryId);
};

module.exports = {
    createCategory,
    getCategoryList,
    deletecategory,
};