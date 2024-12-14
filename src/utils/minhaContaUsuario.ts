import { Usuario } from "../Classes/Usuario"

// primeira coisa: esse método tem que estar trabalhando com o mesmo objeto que o menuUsuario esta
export function minhaContaUsuario(userName: string) {
    console.log("Minha conta: ")
    const usuarioInstanciado = Usuario.listaUsuarios.find((el) => el.userName === userName)
    usuarioInstanciado?.exibirParaUsuario()
}