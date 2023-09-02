const { pharmaService } = require("../services");

const createPharma = async (req, res) => {
    try {
        const reqBody = req.body;

        const pharmaExists = await pharmaService.getPharmaByEmail(reqBody.email);
        if (pharmaExists) {
            throw new Error("pharma already created by this email!");
        }
        res.status(200).json({
            success: true,
            message: "pharma create successfully!",
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get pharma list */
const getPharmaList = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Get pharma list successfully!",
            data: 'Test',
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete pharma */
const deletepharma = async (req, res) => {
    try {
        const pharmaId = req.params.pharmaId;
        if (!pharmaId) {
            throw new Error("pharma not found!");
        }
        await pharmaService.deletepharma(pharmaId);
        res.status(200).json({
            success: true,
            message: "pharma delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createPharma,
    getPharmaList,
    deletepharma
};