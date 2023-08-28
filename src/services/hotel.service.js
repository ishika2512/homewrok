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
    return Hotel.find({ $or: [{ is_active: true}]});
};

/**
 * Delete hotel
 * @param {ObjectId} hotelId
 * @returns {Promise<User>}
 */
const deletehotel = async (hotelId) => {
    return Hotel.findByIdAndDelete(hotelId);
};
module.exports = {
    createHotel,
    getHotelList,
    deletehotel,
};