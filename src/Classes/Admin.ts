import { Usuario } from "./Usuario";

export class Admin extends Usuario {

    constructor(userName: string, senha: string){
        super (userName, "", "", "", senha, true)
    }

    exibir(){
        console.log(`ID: ${this.id} | Username: ${this.nome} | Tipo: ${this.verificaAdmin? "Admin" : "Usuário"} `)
    }
}