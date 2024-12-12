import { Genero } from "./Genero";

export class Livro {
    protected static contadorID : number = 0;
    protected idLivro: number;
    protected nomeLivro: string;
    protected autor: string;
    protected generos: Genero[];
    protected editora: string;
    protected edicao: string;
    protected disponivel: boolean;
    protected dataPublicacao: Date;
    static listaLivros: Livro[]=[];

    constructor (nomeLivro: string, autor: string, generos: Genero[], editora: string, edicao: string, dataPublicacao: Date){
        this.idLivro = Livro.contadorID++;
        this.nomeLivro = nomeLivro;
        this.autor=autor;
        this.generos=generos;
        this.editora=editora;
        this.edicao=edicao;
        this.disponivel=true;
        this.dataPublicacao=dataPublicacao;
        Livro.listaLivros.push(this)
    }

    procuraLivroNome(nome: string): string[] {
        return Livro.listaLivros.filter((el) => el.nomeLivro === nome).map((el) => el.exibirLivro()) // exibir
    }

    exibirLivro(): string {
        return `ID: ${this.idLivro} Nome: ${this.nomeLivro} Autor: ${this.autor} Gêneros: Editora: ${this.edicao} Edição: ${this.edicao}`
    }

    static exibirAcervo(){
        Livro.listaLivros.forEach((el) => console.log(el.exibirLivro()))
    }
}