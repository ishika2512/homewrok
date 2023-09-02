const { categoryService } = require("../services");

const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        // const categoryExists = await categoryService.getCategoryByEmail(reqBody.email);
        // if (categoryExists) {
        //     throw new Error("Category already created by this email!");
        // }
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
        res.status(200).json({
            success: true,
            message: "Get category list successfully!",
            data: 'Test',
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete category */
const deletecategory = async (req, res) => {
    try {
        const categoryId = req.params.busId;
        if (!categoryId) {
            throw new Error("category not found!");
        }

        await categoryService.deletecategory(categoryId);

        res.status(200).json({
            success: true,
            message: "category delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createCategory,
    getCategoryList,
    deletecategory
};