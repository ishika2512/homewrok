const mongoose = require("mongoose");
const pharmaSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        agency_name: {
            type: String,
            trim: true,
        },
        manufacture: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        dosage: {
            type: String,
            trim: true,
        },
        price: {
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

const Pharma = mongoose.model("pharma", pharmaSchema);
module.exports = Pharma;