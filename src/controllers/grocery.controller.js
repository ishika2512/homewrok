const { groceryService } = require("../services");

const createGrocery = async (req, res) => {
    try {
        const reqBody = req.body;

        const groceryExists = await groceryService.getGroceryByEmail(reqBody.email);
        if (groceryExists) {
            throw new Error("grocery already created by this email!");
        }
        res.status(200).json({
            success: true,
            message: "grocery create successfully!",
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get grocery list */
const getGroceryList = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Get grocery list successfully!",
            data: 'Test',
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete grocery */
const deletegrocery = async (req, res) => {
    try {
        const groceryId = req.params.busId;
        if (!groceryId) {
            throw new Error("grocery not found!");
        }
        await groceryService.deletegrocery(groceryId);
        res.status(200).json({
            success: true,
            message: "grocery delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createGrocery,
    getGroceryList,
    deletegrocery
};