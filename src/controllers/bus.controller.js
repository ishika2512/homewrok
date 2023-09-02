const { busService } = require("../services");

const createBus = async (req, res) => {
    try {
        const reqBody = req.body;

        const busExists = await busService.getBusByEmail(reqBody.email);
        if (busExists) {
            throw new Error("bus already created by this email!");
        }
        res.status(200).json({
            success: true,
            message: "bus create successfully!",
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get bus list */
const getBusList = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Get bus list successfully!",
            data: 'Test',
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete bus */
const deletebus = async (req, res) => {
    try {
        const busId = req.params.busId;
        if (!busId) {
            throw new Error("Bus not found!");
        }

        await busService.deletebus(busId);

        res.status(200).json({
            success: true,
            message: "BUs delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createBus,
    getBusList,
    deletebus
}