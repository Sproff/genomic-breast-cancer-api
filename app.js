"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var route_1 = require("./routes/route");
var errorHandler_1 = require("./utils/errorHandler");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
var port = process.env.PORT || 9000;
app.use(express_1.default.json());
app.use("/", route_1.default);
app.use(function (err, req, res, next) {
    (0, errorHandler_1.handleError)(err, res);
});
mongoose_1.default
    .connect(process.env.DB_CONNECTION_STRING || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(function () {
    app.listen(port, function () {
        console.log("Server is running at port: ".concat(port));
    });
    console.log("DB Connected Successfully");
});
