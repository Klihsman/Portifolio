"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var github_1 = __importDefault(require("./controller/github"));
var routes = express_1.Router();
routes.get('/', function (req, res) {
    console.log('oi');
    return res.send('Hello World 3');
});
routes.get('users', github_1.default.test);
routes.post('users', github_1.default.index);
exports.default = routes;
