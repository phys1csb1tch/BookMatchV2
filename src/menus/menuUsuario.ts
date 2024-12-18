import promptSync from "prompt-sync";
import { acervo } from "../utils/acervo";
import { Usuario } from "../Classes/Usuario";
import { Locacao } from "../Classes/Locacao";

export function menuUsuario(usuario: Usuario){
    
    let controle = true
    while(controle){
        const prompt = promptSync();
        console.log(`Sê bem-vinde, ${usuario.nome}!`)

        console.log("1. Minha conta")
        console.log("2. Minhas locações")
        console.log("3. Acervo")
        console.log("4. Sair")

        let opcao = Number(prompt ("Escolha uma opção: "))
        
        switch (opcao){
            case 1:
                usuario.exibir()
                let controle = true;
                while (controle){
                    console.log("1. Alterar dados")
                    console.log("2. Sair")
                    const opcao = Number(prompt("Escolha sua opção:"));
                    switch (opcao){
                        case 1:
                            let controle = true;
                            while(controle){
                                console.log("1. Alterar nome")
                                console.log("2. Alterar nome de usuário")
                                console.log("3. Alterar endereço")
                                console.log("4. Alterar senha")
                                console.log("5. Sair")
                                const opcao = Number(prompt("Escolha sua opção: "))
                                switch (opcao){ 
                                    // posso pensar em colocar esse bloco numa função depois, quem sabe?
                                    case 1:
                                        const novoNome = prompt("Novo nome: ")
                                        usuario.nome=novoNome
                                        console.log("Nome alterado com sucesso.")
                                        break;
                                    case 2:
                                        const novoUserName = prompt ("Novo Nome de Usuário: ")
                                        usuario.userName=novoUserName;
                                        break;
                                    case 3:
                                        const novoEndereco = prompt ("Novo Endereço: ")
                                        usuario.endereco=novoEndereco;
                                        break;
                                    case 4:
                                        const senhaAtual = prompt ("Digite a senha atual: ")
                                        if(senhaAtual === usuario.senha){
                                            const novaSenha = prompt("Digite a nova senha: ")
                                            usuario.senha=novaSenha
                                        } else {
                                            console.error("Senha inválida.")
                                        }
                                        break;
                                    case 5:
                                        const novoCPF = prompt ("Novo CPF: ");
                                        usuario.cpf=novoCPF;
                                        break;
                                    case 6:
                                        console.log("Saindo...")
                                        controle = false;
                                        break;
                                    default:
                                        console.log("Opção inválida.")
                                        break;
                                }
                            }
                            break;
                        case 2:
                            controle = false
                            break;
                        default:
                            console.log("Opção inválida.")
                            break;
                    }
                }
                break;
            case 2:
                usuario.locacoesDoUsuario();
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