const { categoryService, emailService } = require("../services");

const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const categoryExists = await categoryService.getCategoryByEmail(reqBody.email);
        if (categoryExists) {
            throw new Error("Category already created by this email!");
        }
        res.status(200).json({
            success: true,
            message: "Category create successfully!",
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get category list */
const getCategoryList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { first_name: { $regex: search, $options: "i" } },
                { last_name: { $regex: search, $options: "i" } }
            ];
        }

        const getList = await categoryService.getCategoryList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get category list successfully!",
            data: getList,
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createCategory, 
    getCategoryList
};