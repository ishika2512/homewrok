const mongoose = require("mongoose");
const grocerySchema = new mongoose.Schema(
    {
        grocery_name: {
            type: String,
            trim: true,
        },
        grocery_category: {
            type: String,
            trim: true,
        },
        grocery_quanty: {
            type: Number,
        },
        grocery_price: {
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

const Grocery = mongoose.model("grocery", grocerySchema);
module.exports = Grocery;