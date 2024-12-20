import { Admin } from "../Classes/Admin";
import promptSync from "prompt-sync";
export function minhaContaAdmin(admin: Admin) {
    let controle = true
    while(controle){
        const prompt = promptSync();
        console.log("Minha conta")
        console.log("1. Alterar nome de usuário")
        console.log("2. Alterar senha")
        console.log("3. Sair")
        const opcao = Number(prompt("Escolha uma opção:"))
        switch(opcao){
            case 1:
                //nome de usuário
                break;
            case 2:
                // senha
                break;
            case 3:
                console.log("Saindo...")
                controle = false;
                break;
            default:
                console.log("Opção não reconhecida.")
                break;
        }
    }
}