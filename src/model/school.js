const mongoose = require("mongoose");
const schoolSchema = new mongoose.Schema(
    {
        school_name: {
            type: String,
            trim: true,
        },
        school_location: {
            type: String,
            trim: true,
        },
        school_branch: {
            type: String,
            trim: true,
        },
        chairman_name: {
            type: String,
            trim: true,
        },
        pricipal_name: {
            type: String,
            trim: true,
        },
        index_number: {
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

const School = mongoose.model("school", schoolSchema);
module.exports = School;