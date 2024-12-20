import { Locacao } from "../Classes/Locacao";
import { Usuario } from "../Classes/Usuario";
import { acervo } from "./acervo";

export function locacoes (){
    console.log("----LOCAÇÕES----")
    console.log("1. Registrar locação")
    console.log("2. Registrar devolução")
    console.log("3. Consultar livros") // BUSCA LIVRO POR DISPONIBILIDADE // BUSCAR LIVRO POR USUARIO
    console.log("4. Sair")
    let opcao = Number(prompt("Entre com a sua opção: "))
    let controle = true
    while(controle){
        switch (opcao){
            case 1:
                break;
            case 2:
                break;
            case 3:
                console.log("1. Busca no acervo")
                console.log("2. Busca por usuário")
                console.log("3. Sair")
                let opcao = Number(prompt("Entre com a sua opção: "))
                let controle = true;
                while (controle){
                    switch (opcao){
                        case 1:
                            acervo()
                            break;
                        case 2: // busca por usuário
                            break;
                        case 3:
                            console.log("Saindo...")
                            controle = false
                            break;
                        default:
                            console.log("Opção inválida.")
                            break;
                    }
                }
                break;
            case 4:
                console.log("Saindo...")
                controle = false
                break;
            default:
                console.error("Opção inválida.")
                break;
            
        }
    }
               // 1. registrar locação 
                // 2. registrar devolução
                // 3. consultar livros locados
                // 3.1 sem filtro
                // 3.2 por usuário
                // 3.3 por título
                // 3.4 por autor
                // 3.5 por gênero  
}