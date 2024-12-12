"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const Usuario_1 = require("./Usuario");
class Admin extends Usuario_1.Usuario {
    constructor(nome, senha) {
        super(nome, "", "", senha);
        this.verificaAdmin = true;
    }
}
exports.Admin = Admin;
