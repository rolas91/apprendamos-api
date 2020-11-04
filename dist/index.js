"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = __importDefault(require("./clasess/server"));
const typeorm_1 = require("typeorm");
const body_parser_1 = __importDefault(require("body-parser"));
const auth_1 = __importDefault(require("./routes/auth"));
const server = new server_1.default();
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
typeorm_1.createConnection();
//rutas del api
server.app.use('/user', auth_1.default);
server.start(() => {
    console.log(`Server on port ${server.port}`);
});
