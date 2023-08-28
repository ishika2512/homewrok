const { School } = require("../model");

/**
 * Create School
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createSchool = async (reqBody) => {
    return School.create(reqBody);
};

/**
 * Get School list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getSchoolList = async (filter, options) => {
    return School.find({ $or: [{ is_active: true}]});
};

/**
 * Delete school
 * @param {ObjectId} schoolId
 * @returns {Promise<User>}
 */
const deleteschool = async (schoolId) => {
    return School.findByIdAndDelete(schoolId);
};
module.exports = {
    createSchool,
    getSchoolList,
    deleteschool,
};