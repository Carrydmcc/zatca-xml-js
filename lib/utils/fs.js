"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFile = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const writeFile = async (filePath, content) => {
    try {
        await promises_1.default.writeFile(filePath, content);
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            await promises_1.default.mkdir(path_1.default.dirname(filePath), { recursive: true });
            return promises_1.default.writeFile(filePath, content);
        }
        throw err;
    }
};
exports.writeFile = writeFile;
