import promptSync from "prompt-sync";
import { Usuario } from "../Classes/Usuario";
import { Admin } from "../Classes/Admin";
import { minhaContaAdmin } from "../utils/minhaContaAdmin"
import { acervo } from "../utils/acervo";

export function menuAdmin(admin: Admin){
    console.log(`Sê bem-vinde, ${admin.userName}!`)

    let controle = true
    const prompt = promptSync();

    while(controle){
        console.log("------MENU------")
        console.log("1. Minha conta")
        console.log("2. Locações")
        console.log("3. Gerenciar usuários")
        console.log("4. Acervo")
        console.log("5. Sair")
        let opcao = Number(prompt ("Escolha uma opção: "))
        switch (opcao){
            case 1:
                
                minhaContaAdmin(admin)

                break;
            case 2:
                console.log("Locações")
                // 1. registrar locação 
                // 2. registrar devolução
                // 3. consultar livros locados
                // 3.1 sem filtro
                // 3.2 por usuário
                // 3.3 por título
                // 3.4 por autor
                // 3.5 por gênero  
                break;
            case 3: 
                console.log("Gerenciar Usuários")
                // 1. Cadastrar novo usuário
                // 2. remover usuário
                // 3. ver todos os usuários
                // 4. alterar dados de usuário
                // 5. Cadastrar novo admin
                // 6. remover admin
                // 7. ver todos administradores
                // 8. alterar dados de admin
                // 9. pesquisar usuário
                // 9.1 por nome
                // 9.2 por cpf
                // 9.3 por id
                break;
            case 4:
                console.log("Acervo")
                // 1. cadastrar novo livro
                // 2. remover livro
                // 3. editar livro
                // 4. cadastrar novo gênero
                // 5. remover gênero
                // 6. editar gênero
                // 7. mostrar acervo (dentro do acervo vai aparecer as opções de filtro de pesquisa)
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