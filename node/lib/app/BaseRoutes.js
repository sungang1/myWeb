"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const InitRoutes_1 = require("./Init/InitRoutes");
var app = express.Router();
exports.BaseRoutes = app;
app.use('/my', new InitRoutes_1.InitRoutes().routes);
//# sourceMappingURL=BaseRoutes.js.map