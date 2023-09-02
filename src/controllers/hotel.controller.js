const { hotelService } = require("../services");

const createHotel = async (req, res) => {
    try {
        const reqBody = req.body;

        const hotelExists = await hotelService.getHotelByEmail(reqBody.email);
        if (hotelExists) {
            throw new Error("hotel already created by this email!");
        }
        res.status(200).json({
            success: true,
            message: "hotel create successfully!",
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get hotel list */
const getHotelList = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Get hotel list successfully!",
            data: 'Test',
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete hotel */
const deletehotel = async (req, res) => {
    try {
        const hotelId = req.params.hotelId;
        if (!hotelId) {
            throw new Error("hotel not found!");
        }
        await hotelService.deletehotel(hotelId);
        res.status(200).json({
            success: true,
            message: "hotel delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createHotel,
    getHotelList,
    deletehotel
};