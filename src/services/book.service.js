const { Book } = require("../model");

/**
 * Create book
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createBook = async (reqBody) => {
    return Book.create(reqBody);
};

/**
 * Get book list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getBookList = async (filter, options) => {
    return Book.find({ $or: [{ is_active: true}]});
};


/**
 * Delete book
 * @param {ObjectId} bookid
 * @returns {Promise<User>}
 */
const deletebook = async (bookid) => {
    return Book.findByIdAndDelete(bookid);
};



module.exports = {
    createBook,
    getBookList,
    deletebook
};