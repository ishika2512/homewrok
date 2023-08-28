const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema(
    {
        hotel_name: {
            type: String,
            trim: true,
        },
        hotel_type: {
            type: String,
            trim: true,
        },
        hotel_location: {
            type: String,
            trim: true,
        },
        room_type: {
            type: String,
            trim: true,
        },
        room_rent: {
            type: Number,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Hotel = mongoose.model("hotel", hotelSchema);
module.exports = Hotel;