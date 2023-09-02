const mongoose = require("mongoose");
const musicSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true,
        },
        product_id: {
            type: Number,
            trim: true,
        },
        product_quantity: {
            type: Number,
            trim: true,
        },
        product_price: {
            type: Number,
            trim: true,
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category",
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

const Product = mongoose.model("product", productSchema);
module.exports = Product;