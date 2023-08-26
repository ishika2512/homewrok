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
    const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return School.find(filter).skip(skip).limit(options.limit).select("-password");
};
module.exports = {
    createSchool,
    getSchoolList
};