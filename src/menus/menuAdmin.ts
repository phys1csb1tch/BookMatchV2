import promptSync from "prompt-sync";
import { Usuario } from "../Classes/Usuario";
import { Admin } from "../Classes/Admin";

export function menuAdmin(admin: Admin){
    console.log(`Sê bem-vinde, ${admin.nome}!`)

    let controle = true
    const prompt = promptSync();

    while(controle){

    }
}