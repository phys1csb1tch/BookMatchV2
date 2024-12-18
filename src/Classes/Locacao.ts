import { Livro } from "./Livro";
import { Usuario } from "./Usuario";

export class Locacao {
    protected _idLocacao: number;
    protected static contadorID: number = 1;
    protected _livro: Livro;
    protected _usuario: Usuario;
    protected _dataLocacao: Date;
    protected _previsaoDevolucao: Date;
    protected _dataDevolucao: Date | null;
    static listaLocacoes: Locacao[]=[];

    constructor(livro: Livro, usuario: Usuario){
        this._idLocacao=Locacao.contadorID++;
        this._livro=livro;
        this._usuario=usuario;
        this._dataLocacao= new Date();
        this._previsaoDevolucao = new Date (this._dataLocacao) //Quando você usa setDate em this._previsaoDevolucao, a alteração também afeta this._dataLocacao, porque ambas variáveis referenciam o mesmo objeto.
        this._previsaoDevolucao.setDate(this._dataLocacao.getDate()+14) // aparentemente preciso iniciar "previsao devolucao" antes de fazer alterações nela
        this._dataDevolucao=null;
        if (this._livro._disponivel){
            Locacao.listaLocacoes.push(this)
            console.log("Locação registrada com sucesso.")
            this._livro.disponivel=false;
        }
         // acho que aqui eu inicio uma verificação do status do livro 
    }

    exibirLocacao(){

    }

    get usuario (): Usuario{
        return this._usuario
    }
    set usuario (novoUsuario: Usuario){
        this._usuario=novoUsuario
    }

    get livro(): Livro{
        return this._livro
    }
    set livro(novoLivro: Livro){
        this._livro=novoLivro
    }

    get idLocacao(): number{
        return this._idLocacao
    }
    set idLocacao( novoId: number){
        this._idLocacao=novoId;
    }

    get dataLocacao (): Date{
        return this._dataLocacao
    }

    get previsaoDeDevolucao(): Date{
        return this._previsaoDevolucao
    }

    get dataDevolucao(): string | undefined{
        if (this._dataDevolucao){
            return this._dataDevolucao.toLocaleDateString();
        }
    }

}