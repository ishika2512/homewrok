const { Travel } = require("../model");

/**
 * Create Travel
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createTravel = async (reqBody) => {
    return Travel.create(reqBody);
};

/**
 * Get Travel list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getTravelList = async (filter, options) => {
    return Travel.find({ $or: [{ is_active: true}]});
};

/**
 * Delete user
 * @param {ObjectId} travelId
 * @returns {Promise<User>}
 */
const deleteTravel = async (travelId) => {
    return Travel.findByIdAndDelete(travelId);
  };
  
module.exports = {
    createTravel,
    getTravelList,
    deleteTravel,
};