// pelo que eu entendi, esses métodos de busca da classe Usuário só informam se um usuário foi encontrado ou não, pra algum teste se não me engano. Vou precisar encontrar alguma forma de fazer com que estes testes retornem algum valor pra valer de pesquisa no acervo
import PromptSync from "prompt-sync"
import { Usuario } from "../Classes/Usuario"
export function buscaUsuario(){
    let controle = true
    console.log("1. Busca por ID")
    console.log("2. Busca por Nome")
    console.log("3. Busca por nome de Usuário")
    console.log("4. Busca por CPF")
    console.log("5. Sair")
    let opcao = Number(prompt("Entre com sua opção: "))
    while(controle){
        switch (opcao){
            case 1:
                var buscaID = Number (prompt("ID: ")) ?? ""
                var saida = Usuario.procuraID(buscaID)
                console.log(saida? "Usuário encontrado" : "Usuário não encontrado")
                break;
            case 2:
                var buscaNome = prompt ("Nome: ") ?? ""
                var saida = Usuario.procuraNome(buscaNome)
                console.log(saida? "Usuário encontrado" : "Usuário não encontrado")
                break;
            case 3:
                var buscaUsername = prompt ("Nome de usuário: ") ?? ""
                var saida = Usuario.procuraUserName(buscaUsername)
                console.log(saida? "Usuário encontrado" : "Usuário não encontrado")
                break;
            case 4:
                var buscaCPF = prompt ("CPF: ") ?? ""
                var saida = Usuario.procuraCPF(buscaCPF)
                console.log(saida? "Usuário encontrado" : "Usuário não encontrado")
                break;
            case 5:
                console.log("Saindo...")
                controle = false;
                break;
            default:
                console.log("Opção não reconhecida.")
                break;
        }
    }
}