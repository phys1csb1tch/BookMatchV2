
export class Usuario {
    protected verificaAdmin: boolean = false; // verificador de se o Usuário é admin ou não
    static listaUsuarios: Usuario[]=[]; // Array que armazena os usuários
    protected static contadorID: number = 1 //Contador auto-incrementado estático 
    protected id: number;
    protected nome: string;
    protected userName: string;
    protected cpf: string;
    protected endereco: string;
    protected senha: string;

    constructor (userName:string, nome: string, cpf: string, endereco: string, senha: string, verificaAdmin: boolean = false){
        this.id=Usuario.contadorID++ // incrementa em 1 a cada instancia de Usuário
        this.userName=userName;
        this.nome=nome;
        this.cpf=cpf;
        this.endereco=endereco;
        this.senha=senha;
        this.verificaAdmin=verificaAdmin;
        this.registrarUsuario();
       
    }

    private registrarUsuario(){
        if (Usuario.listaUsuarios.find((el) => el.cpf === this.cpf)){
            console.log("Já existe um usuário cadastrado com este cpf.")
        } else {
            Usuario.listaUsuarios.push(this)
            if(!this.verificaAdmin){
                console.log("Usuário cadastrado.")
            } else {
                console.log("Admin cadastrado.")
            }
        }
    }

    exibir(){
        console.log(`ID: ${this.id} | Nome: ${this.nome} | CPF: ${this.cpf} | Endereço: ${this.endereco} | Tipo: ${this.verificaAdmin? "Admin" : "Usuário"} `)
    }

    static login (userName: string, senha: string): string{
        const testeLogin = Usuario.listaUsuarios.find((el) => el.userName === userName && el.senha === senha)
        return testeLogin? `Seja bem vinde, ${userName}.` : "Credenciais inválidas."
    }

    
    static cadastroUsuario() {
        const promptSync = require("prompt-sync")();
        const userName = promptSync("Nome de usuário: ") ?? "";
        const nome = promptSync("Nome: ") ?? "";
        const cpf = promptSync("CPF: ") ?? "";
        const endereco = promptSync("Endereço: ") ?? "";
        const senha = promptSync("Senha: ") ?? "";
   
        // Cria o novo usuário e registra
        const novoUsuario = new Usuario(userName, nome, cpf, endereco, senha, false); // erro: já existe usuario cadastrado nesse cpf 
    }
}