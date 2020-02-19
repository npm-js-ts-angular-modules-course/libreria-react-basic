"use strict";
/** Function component */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Hello = ({ name }) => {
    if (!name) {
        name = 'Mundo';
    }
    return (react_1.default.createElement("h1", null,
        "Hola ",
        name,
        " "));
};
exports.default = Hello;
