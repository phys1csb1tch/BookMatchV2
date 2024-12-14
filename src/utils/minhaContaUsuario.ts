import { Usuario } from "../Classes/Usuario"
import promptSync from "prompt-sync";


// primeira coisa: esse método tem que estar trabalhando com o mesmo objeto que o menuUsuario esta
export function minhaContaUsuario(userName: string) {
    const prompt = promptSync();
    console.log("Minha conta: ")
    const usuarioInstanciado = Usuario.listaUsuarios.find((el) => el.userName === userName)
    usuarioInstanciado?.exibirParaUsuario()
    let controle = true
    while(controle){
        let opcao =  Number(prompt ("1. Alterar dados de conta | 2. Sair"))
        switch (opcao){
            case 1:
                alteraDados(userName);
                break;
            case 2:
                console.log("Saindo..")
                controle = false;
                break;
            default:
                console.log("Opção não reconhecida.")
                break;
        }
    }
}

export function alteraDados(userName: string){
    const prompt = promptSync();
    const usuarioInstanciado = Usuario.listaUsuarios.find((el) => el.userName === userName)
    console.log("1. Alterar Nome")
    console.log("2. Alterar Nome de Usuário")
    console.log("3. Alterar CPF")
    console.log("4. Alterar Endereço")
    console.log("5. Alterar Senha")
    console.log("6. Sair")
    let controle = true
    while (controle){ // ba me perdi se pa
        let opcao = Number(prompt("Escolha uma opção: "))
            switch (opcao){
                case 1:
                    //altera nome
                    break;
                case 2:
                    //altera nome de usuário
                    break;
                case 3:
                    // altera cpf
                    break;
                case 4:
                    // altera endereço
                    break;
                case 5:
                    // altera senha
                    break;
                case 6:
                    console.log("Saindo...")
                    controle = false
                    break;
                default:
                    console.log("Opção não reconhecida.")
                    break;
            }

    }
}