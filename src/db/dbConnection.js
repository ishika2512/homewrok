const mongoose = require("mongoose");
const config = require("../config/config");
const connectDB = async () => {
    mongoose
        .connect(config.mongodb.url, config.mongodb.opetions)
        .then((data) => {
            console.log('database connection successfullyyyyyyyyy!');
        })
        .catch((error) => {
            console.log("database connection error: ", error);
        });
};
module.exports = { connectDB };