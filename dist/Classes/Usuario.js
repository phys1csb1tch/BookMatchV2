"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(nome, cpf, endereco, senha) {
        this.id = Usuario.contadorID++; // incrementa em 1 a cada instancia de Usuário
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.senha = senha;
        this.verificaAdmin = false;
        // verificar se já existe o usuario por cpf
        if (Usuario.listaUsuarios.find((el) => this.cpf)) {
            console.log("Já existe um usuário cadastrado com este cpf.");
        }
        else {
            Usuario.listaUsuarios.push(this);
            if (!this.verificaAdmin) {
                console.log("Usuário cadastrado.");
            }
            else {
                console.log("Admin cadastrado.");
            }
        }
    }
}
exports.Usuario = Usuario;
Usuario.listaUsuarios = []; // Array que armazena os usuários
Usuario.contadorID = 1; //Contador auto-incrementado estático 
