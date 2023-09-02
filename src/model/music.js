const mongoose = require("mongoose");
const musicSchema = new mongoose.Schema(
    {
        song_title: {
            type: String,
            trim: true,
        },
        song_name: {
            type: String,
            trim: true,
        },
        movie_name: {
            type: String,
            trim: true,
        },
        artists_name: {
            type: String,
            trim: true,
        },
        movie: {
            type: mongoose.Types.ObjectId,
            ref: "movie",
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

const Music = mongoose.model("music", musicSchema);
module.exports = Music;