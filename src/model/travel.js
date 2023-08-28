const mongoose = require("mongoose");
const travelSchema = new mongoose.Schema(
    {
        travel_agency: {
            type: String,
            trim: true,
        },
        traveler_name: {
            type: String,
            trim: true,
        },
        booking_confirmation: {
            type: String,
            trim: true,
        },
        travel_place: {
            type: String,
            trim: true,
        },
        travel_package: {
            type: Number,
        },
        hotel_name: {
            type: String,
            trim: true,
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

const Travel = mongoose.model("travel", travelSchema);
module.exports = Travel;