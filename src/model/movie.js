const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema(
    {
        movie_name: {
            type: String,
            trim: true,
        },
        directed_by: {
            type: String,
            trim: true,
        },
        actor_name: {
            type: String,
            trim: true,
        },
        actress_name: {
            type: String,
            trim: true,
        },
        ticket_price: {
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

const Movie = mongoose.model("movie", movieSchema);
module.exports = Movie;