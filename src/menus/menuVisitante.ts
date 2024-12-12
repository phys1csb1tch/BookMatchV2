import promptSync from "prompt-sync";
import { Usuario } from "../Classes/Usuario";
import { Livro } from "../Classes/Livro";

export function menuVisitante() {
    const prompt = promptSync();
    
    let controle = true;

    while(controle){
        console.clear()
        console.log ("Bem vinde ao BookMatch!")
        console.log (" 1. Login \n 2. Registre-se \n 3. Listar Acervo \n 4. Sair")
        const opcao = Number(prompt ("Escolha uma opção: "))

        
        switch (opcao) {
            
            case 1:
                console.log ("Fazendo Login")
                const userNameLogin = prompt ("Nome de usuário: ")
                const senhaLogin = prompt ("Senha: ")
                console.log(Usuario.login (userNameLogin, senhaLogin));

                //acho q aqui chama ou menu admin ou menu usuario
                break;
            case 2:
                console.log("Registro")
                Usuario.cadastroUsuario();
                break;
            case 3: 
                acervo();
                break;
            case 4:
                console.log("Saindo.")
                controle=false;
                break;
            default:
                console.error ("Opção não reconhecida.")
                break;
        }
    }
}

export function acervo(){ // TRETA NO MENU COMO SEMPRE
    console.clear;
    const prompt = promptSync()
    console.log("Bem vinde ao Acervo BookMatch!")
    console.log("1. Listar Todo Acervo")
    console.log("2. Buscar no Acervo")
    console.log("3. Sair do acervo")
    const opcao = Number(prompt("Escolha uma opção: "))

    switch (opcao) {
        case 1: 
            console.log("Exibindo Acervo")
            Livro.exibirAcervo()
            break;
        case 2:
            console.log ("Busca")
            break;
        case 3:
            console.log("Saindo")
        default: 
            console.log("Entrada inválida.")
            break;
    }
}