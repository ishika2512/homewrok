const express = require("express");
const http = require("http");
const { connectDB } = require("./db/dbConnection");
const routes = require("./routes/v1");
const config = require("./config/config")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

/** enable cors */
app.use(cors());
app.options("*", cors());

app.use("/v1", routes);

app.use((req, res, next) => {
    next(new Error("Route not found!"));
});

/** Database connection */
connectDB()

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server is started");
});

