const { musicService } = require("../services");

const createMusic = async (req, res) => {
    try {
        const reqBody = req.body;

        const musicExists = await musicService.getMusicByEmail(reqBody.email);
        if (musicExists) {
            throw new Error("music already created by this email!");
        }
        res.status(200).json({
            success: true,
            message: "music create successfully!",
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get music list */
const getMusicList = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Get music list successfully!",
            data: 'Test',
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete music */
const deletemusic = async (req, res) => {
    try {
        const musicId = req.params.musicId;
        if (!musicId) {
            throw new Error("music not found!");
        }
        await musicService.deletemusic(musicId);
        res.status(200).json({
            success: true,
            message: "music delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createMusic,
    getMusicList,
    deletemusic
};