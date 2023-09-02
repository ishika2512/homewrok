const { productService } = require("../services");

const createProduct = async (req, res) => {
    try {
        const reqBody = req.body;

        const productExists = await productService.getProductByEmail(reqBody.email);
        if (productExists) {
            throw new Error("product already created by this email!");
        }
        res.status(200).json({
            success: true,
            message: "product create successfully!",
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get product list */
const getProductList = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Get product list successfully!",
            data: 'Test',
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete product */
const deleteproduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        if (!productId) {
            throw new Error("product not found!");
        }
        await productService.deleteproduct(productId);
        res.status(200).json({
            success: true,
            message: "product delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createProduct,
    getProductList,
    deleteproduct
};