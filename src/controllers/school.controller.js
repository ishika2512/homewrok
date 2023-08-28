const { schoolService, emailService } = require("../services");
const createSchool = async (req, res) => {
    try {
        const reqBody = req.body;

        const schoolExists = await schoolService.getschoolByEmail(reqBody.email);
        if (schoolExists) {
            throw new Error("school already created by this email!");
        }
        res.status(200).json({
            success: true,
            message: "school create successfully!",
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
/** Get school list */
const getSchoolList = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Get school list successfully!",
            data: 'Test',
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete school */
const deleteschool = async (req, res) => {
    try {
        const schoolId = req.params.schoolId;
        if (!schoolId) {
            throw new Error("school not found!");
        }
        await schoolService.deleteschool(schoolId);
        res.status(200).json({
            success: true,
            message: "school delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createSchool,
    getSchoolList,
    deleteschool
};