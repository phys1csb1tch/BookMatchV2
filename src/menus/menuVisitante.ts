import promptSync from "prompt-sync";
import { Usuario } from "../Classes/Usuario";
import { acervo } from "../utils/acervo";
import { menuAdmin } from "./menuAdmin";
import { menuUsuario } from "./menuUsuario";

export function menuVisitante() {
    const prompt = promptSync();
    
    let controle = true;

    while(controle){
        console.log ("Bem vinde ao BookMatch!")
        console.log (" 1. Login \n 2. Registre-se \n 3. Acervo \n 4. Sair")
        const opcao = Number(prompt ("Escolha uma opção: "))

        
        switch (opcao) {
            
            case 1:
                console.log ("Fazendo Login")
                const userNameLogin = prompt ("Nome de usuário: ")
                const senhaLogin = prompt ("Senha: ")
                console.log(Usuario.login (userNameLogin, senhaLogin));

                /**
                 * lógica: pega userNameLogin e puxa o objeto;
                 * objeto.testaAdmin ? menu admin : menu usuario
                 */
                const usuarioEncontrado = Usuario.listaUsuarios.find((el) => el.userName === userNameLogin);
                if (usuarioEncontrado){
                    (usuarioEncontrado).verificaAdmin? menuAdmin(userNameLogin) : menuUsuario(userNameLogin);
                }
                break;
            case 2:
                console.log("Registro")
                Usuario.cadastroUsuario();
                break;
            case 3: 
                acervo(); // não tá listando acervo
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