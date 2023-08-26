const { jewelleryService, emailService } = require("../services");

const createJewellery = async (req, res) => {
    try {
        const reqBody = req.body;
        const jewelleryExists = await jewelleryService.getJewelleryByEmail(reqBody.email);
        if (jewelleryExists) {
            throw new Error("jewellery already created by this email!");
        }
        res.status(200).json({
            success: true,
            message: "jewellery create successfully!",
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get jewellery list */
const getJewelleryList = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Get jewellery list successfully!",
            data: 'Test',
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete jewellery */
const deletejewellery = async (req, res) => {
    try {
        const jewelleryId = req.params.jewelleryId;
        if (!jewelleryId) {
            throw new Error("jewellery not found!");
        }
        await jewelleryService.deletejewellery(jewelleryId);
        res.status(200).json({
            success: true,
            message: "jewelleryy delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createJewellery,
    getJewelleryList,
    deletejewellery
};