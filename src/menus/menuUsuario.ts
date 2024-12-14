import promptSync from "prompt-sync";
import { acervo } from "../utils/acervo";
import { Usuario } from "../Classes/Usuario";
import { minhaContaUsuario } from "../utils/minhaContaUsuario";

export function menuUsuario(userName: string){
    
    let controle = true
    while(controle){
        const prompt = promptSync();
        console.log(`Sê bem-vinde, ${userName}!`)
        const usuarioInstanciado = Usuario.listaUsuarios.find((el) => el.userName === userName)
        
        // Usuário: Minha conta (alterar dados) | Ver minhas locações | Listar Acervo (filtros) | Sair

        console.log("1. Minha conta")
        console.log("2. Minhas locações")
        console.log("3. Acervo")
        console.log("4. Sair")

        let opcao = Number(prompt ("Escolha uma opção: "))
        
        switch (opcao){
            case 1:
                minhaContaUsuario(userName);
                // menu alterar conta
                break;
            case 2:
                console.log("Minhas Locações")
                break;
            case 3:
                acervo();
                break;
            case 4:
                console.log("Saindo...")
                controle = false;
                break;
            default:
                console.log("Opção não reconhecida.")
                break;
        }

    }
}