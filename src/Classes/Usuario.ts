import test from "node:test";
import { Locacao } from "./Locacao";
export class Usuario {
    protected _verificaAdmin: boolean = false; // verificador de se o Usuário é admin ou não
    static listaUsuarios: Usuario[]=[]; // Array que armazena os usuários
    protected static contadorID: number = 1 //Contador auto-incrementado estático 
    protected id: number;
    protected _nome: string;
    protected _userName: string;
    protected _cpf: string;
    protected _endereco: string;
    protected _senha: string;

    constructor (userName:string, nome: string, cpf: string, endereco: string, senha: string, verificaAdmin: boolean = false){
        this.id=Usuario.contadorID++ // incrementa em 1 a cada instancia de Usuário
        this._userName=userName;
        this._nome=nome;
        this._cpf=cpf;
        this._endereco=endereco;
        this._senha=senha;
        this._verificaAdmin=verificaAdmin;
        this.registrar();
       
    }

    private registrar(){
        if (Usuario.listaUsuarios.find((el) => el._cpf === this._cpf)){
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
        console.log(`ID: ${this.id} | Nome: ${this.nome} | CPF: ${this._cpf} | Endereço: ${this.endereco} | Tipo: ${this.verificaAdmin? "Admin" : "Usuário"} `)
    }

    static login (userName: string, senha: string): string{
        const testeLogin = Usuario.listaUsuarios.find((el) => el.userName === userName && el._senha === senha)
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
        const novoUsuario = new Usuario(userName, nome, cpf, endereco, senha, false); 
    }
    get userName(): string{
        return this._userName
    }
    get verificaAdmin(): boolean{
        return this._verificaAdmin
    }
    get nome(): string{
        return this._nome
    }
    set nome (novoNome: string){
        this._nome=novoNome
    }
    set userName (novoUserName: string){
        if (!Usuario.procuraUserName){
            this._userName=novoUserName
        } else {
            console.log("Nome de usuário já cadastrado no sistema.")
        }
    }

    static procuraUserName(username:string): boolean {
        const testeUsername= Usuario.listaUsuarios.find((el) => el._userName === username)
        return !!testeUsername
    }

    get endereco(): string{
        return this._endereco
    }

    set endereco(novoEndereco: string){
        this._endereco=novoEndereco;
    }

    get cpf (): string{
        return this._cpf
    }

    set cpf (novoCPF: string){
        if (!Usuario.procuraCPF){
            this._cpf=novoCPF
        } else {
            console.log("CPF já cadastrado no sistema.")
        }
    }

   static procuraCPF(CPF:string): boolean {
        const testeCPF= Usuario.listaUsuarios.find((el) => el._cpf === CPF)
        return !! testeCPF
    }

    static procuraID(ID: number): boolean {
        const testeID=Usuario.listaUsuarios.find((el) => el.id === ID)
        return !!testeID; //  retorna true se encontrado, false se não encontrado
    }

    static procuraNome(nome: string): boolean {
        const testeNome=Usuario.listaUsuarios.find((el) => el.nome === nome)
        return !!testeNome
    }

    get senha (): string{
        return this._senha
    }

    set senha (novaSenha: string){
        this._senha=novaSenha;
    }

    locacoesDoUsuario (){
        let listaLocacoes = Locacao.listaLocacoes.filter((el) => el.usuario === this) // filter sempre retorna true se testado, pois sempre gera um array, ainda que vazio
        if (listaLocacoes.length >0){
            console.log(`Locações do Usuário ${this.nome}:`) // aqui preciso adicionar uma visualização pra cada elemento no array
            listaLocacoes.forEach((locacao) => {
            console.log(`ID de locação: ${locacao.idLocacao}`)
            console.log(`Livro: ${locacao.livro.nomeLivro}`)
            console.log(`Data de locação: ${locacao.dataLocacao.toLocaleDateString()}`)
            console.log(`Previsão de devolução: ${locacao.previsaoDeDevolucao.toLocaleDateString()}`)
            console.log(`Data de devolução: ${locacao.dataDevolucao? locacao.dataDevolucao : "Livro ainda não devolvido."}`)
            }
            )
        } else {
            console.log("Nenhuma locação registrada para este usuário.")
        } 
    }
}