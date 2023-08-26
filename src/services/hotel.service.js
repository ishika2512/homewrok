const { Hotel } = require("../model");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createHotel = async (reqBody) => {
    return Category.create(reqBody);
};

/**
 * Get hotel list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getHotelList = async (filter, options) => {
    const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

    return Hotel.find(filter).skip(skip).limit(options.limit).select("-password");
};
module.exports = {
    createHotel,
    getHotelList
};