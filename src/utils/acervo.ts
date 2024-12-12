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