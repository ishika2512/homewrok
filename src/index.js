const express = require("express");
const http = require("http");
const { connectDB } = require("./db/dbconnection")

const app=express();

/** Database connection */
connectDB()

const server=http.createServer(app);

server.listen(config.port, () => {
    console.log("server is started");
});

