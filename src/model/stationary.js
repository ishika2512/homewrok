const mongoose = require("mongoose");
const stationarySchema = new mongoose.Schema(
    {
        stationary_name: {
            type: String,
            trim: true,
        },
        owner_name: {
            type: String,
            trim: true,
        },
        stationary_location: {
            type: String,
            trim: true,
        },
        item_name: {
            type: String,
            trim: true,
        },
        item_quantity: {
            type: Number,
        },
        item_price: {
            type: Number,
        },
        book: {
            type: mongoose.Types.ObjectId,
            ref: "book",
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

const Stationary = mongoose.model("stationary", stationarySchema);
module.exports = Stationary;
