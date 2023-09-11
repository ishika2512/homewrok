const mongoose = require("mongoose");
const mobileSchema = new mongoose.Schema(
    {
        company_name: {
            type: String,
            trim: true,
        },

        mobile_model: {
            type: String,
            trim: true,
        },

        device_name: {
            type: String,
            trim: true,
        },

        mobile_desc: {
            type: String,
            trim: true,
        },

        mobile_storage: {
            type: String,
            trim: true,
        },

        mobile_price: {
            type: Number,
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

const mobile = mongoose.model("mobile", mobileSchema);
module.exports = mobile;