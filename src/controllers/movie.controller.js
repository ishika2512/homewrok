const { movieService } = require("../services");

const createMovie = async (req, res) => {
    try {
        const reqBody = req.body;

        const movieExists = await movieService.getMovieByEmail(reqBody.email);
        if (movieExists) {
            throw new Error("movie already created by this email!");
        }
        res.status(200).json({
            success: true,
            message: "movie create successfully!",
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get movie list */
const getMovieList = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Get movie list successfully!",
            data: 'Test',
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete movie */
const deletemovie = async (req, res) => {
    try {
        const movieId = req.params.movieId;
        if (!movieId) {
            throw new Error("movie not found!");
        }
        await movieService.deletemovie(movieId);
        res.status(200).json({
            success: true,
            message: "movie delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createMovie,
    getMovieList,
    deletemovie
};