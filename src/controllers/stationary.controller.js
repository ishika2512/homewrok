const { stationaryService, emailService } = require("../services");

const createStationary = async (req, res) => {
    try {
        const reqBody = req.body;

        const stationaryExists = await stationaryService.getStationaryByEmail(reqBody.email);
        if (stationaryExists) {
            throw new Error("stationary already created by this email!");
        }
        res.status(200).json({
            success: true,
            message: "stationary create successfully!",
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get stationary list */
const getStationaryList = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Get stationary list successfully!",
            data: 'Test',
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete stationary */
const deletestationary = async (req, res) => {
    try {
        const stationaryId = req.params.stationaryId;
        if (!stationaryId) {
            throw new Error("stationary not found!");
        }
        await stationaryService.deletestationary(stationaryId);
        res.status(200).json({
            success: true,
            message: "stationary delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createStationary,
    getStationaryList,
    deletestationary
};