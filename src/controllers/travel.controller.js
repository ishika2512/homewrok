const { travelService, emailService } = require("../services");

const createTravel = async (req, res) => {
    try {
        const reqBody = req.body;

        const travelExists = await travelService.getTravelByEmail(reqBody.email);
        if (travelExists) {
            throw new Error("travel already created by this email!");
        }
        res.status(200).json({
            success: true,
            message: "travel create successfully!",
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get travel list */
const getTravelList = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Get travel list successfully!",
            data: 'Test',
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete travel */
const deletetravel = async (req, res) => {
    try {
        const travelId = req.params.travelId;
        if (!travelId) {
            throw new Error("travel not found!");
        }
        await travelService.deletetravel(travelId);
        res.status(200).json({
            success: true,

            message: "travel delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createTravel,
    getTravelList,
    deletetravel
};