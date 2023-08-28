const mongoose = require("mongoose");
const jewellerySchema = new mongoose.Schema(
    {
        jewellery_name: {
            type: String,
            trim: true,
        },
        jewellery_type: {
            type: String,
            trim: true,
        },
        jewellery_materials: {
            type: String,
            trim: true,
        },
        bill_number: {
            type: Number,
        },
        total_amount: {
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

const Jewellery = mongoose.model("jewellery", jewellerySchema);
module.exports = Jewellery;