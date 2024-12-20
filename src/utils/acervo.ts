import promptSync from "prompt-sync";
import { Livro } from "../Classes/Livro";


export function acervo(){
    
    const prompt = promptSync()
    let controle = true;

    while(controle) {
        console.log("Acervo BookMatch")
        console.log("1. Listar Todo Acervo")
        console.log("2. Buscar no Acervo")
        console.log("3. Sair do acervo")
        const opcao = Number(prompt("Escolha uma opção: "))

        switch (opcao) {
            case 1: 
                console.log("Exibindo Acervo...")
                Livro.exibirAcervo();
                break;
            case 2:
                console.log ("Busca")
                buscaAcervo();
                break;
            case 3:
                console.log("Saindo");
                controle=false;
                break;
            default: 
                console.log("Entrada inválida.")
                break;
        }
    }
}

export function buscaAcervo(){
    const prompt = promptSync()
    let controle = true;
    while(controle){
        console.log("1. Busca por título")
        console.log("2. Busca por autor")
        console.log("3. Busca por gênero")
        console.log("4. Sair")
        let opcao = Number(prompt ("Escolha uma opção: "))

        switch (opcao){
            case 1:
                console.log("Busca por título")
                var busca = prompt ("Entre com a palavra-chave: ")
                if (!busca){
                    console.error("Nenhuma palavra-chave foi inserida.")
                } else {
                    let saida = Livro.procuraLivroNome(busca)
                    if (saida.length > 0 ){
                        console.log("Livros Encontrados: ");
                        saida.forEach((el) => console.log(el))
                    } else {
                        console.log("Nenhum livro encontrado.")
                    }
                }
                break;
            case 2:
                console.log("Busca por autor")
                var busca = prompt ("Entre com a palavra-chave: ")
                if (!busca){
                    console.error("Nenhuma palavra-chave foi inserida.")
                } else {
                    let saida = Livro.procuraLivroAutor(busca)
                    if (saida.length > 0){
                        console.log("Livros encontrados: ")
                        saida.forEach((el) => console.log(el))
                    } else {
                        console.log("Nenhum livro foi encontrado.")
                    }
                }
                break;
            case 3:
                console.log("Busca por gênero")
                var busca = prompt ("Entre com a palavra-chave: ")
                if (!busca){
                    console.error("Nenhuma palavra-chave foi inserida.")
                } else {
                    let saida = Livro.procuraLivroGenero(busca)
                    if (saida.length > 0){
                        console.log("Livros encontrados: ")
                        saida.forEach((el) => console.log(el))
                    } else {
                        console.log("Nenhum livro foi encontrado.")
                    }
                }
                break;
            case 4:
                console.log("Busca por disponibilidade")
                console.log("1. Procurar somente livros disponíveis")
                console.log("2. Procurar somente livros locados")
                let opcao = prompt(`Digite sua opção: `)    
                
                if (opcao ==="1" ){
                    let busca = true
                    Livro.procuraLivroStatus(busca)
                } else if (opcao ==="2") {
                    let busca = false
                    Livro.procuraLivroStatus(busca)
                } else {
                    console.log("Opção inválida.")
                }

                
            // pesquisa por disponibilidade
                break;
            case 5:
                console.log("Saindo...");
                controle = false;
                break;
                
            default:
            console.log("Opção inválida.")
            break;
        }
    }
}
