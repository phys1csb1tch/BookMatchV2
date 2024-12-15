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

    static procuraLivroNome(nome: string): string[] {
        const normalizado = nome.toLowerCase().trim();
        return Livro.listaLivros.filter((el) => el.nomeLivro.toLowerCase().includes(normalizado)).map((el) => Livro.exibirLivro(el))
    }

    static exibirLivro(livro: Livro): string {
        return `ID: ${livro.idLivro} Nome: ${livro.nomeLivro} Autor: ${livro.autor} Gêneros: ${livro.generos.map(el => el.nomeGenero).join(", ")} Editora: ${livro.edicao} Edição: ${livro.edicao}`
    }

    static exibirAcervo(){
        Livro.listaLivros.forEach((el) => console.log(Livro.exibirLivro(el)))
    }

    static procuraLivroAutor(autor: string): string[]{
        const normalizado = autor.toLowerCase().trim();
        return Livro.listaLivros.filter((el) => el.autor.toLowerCase().includes(normalizado)).map((el) => Livro.exibirLivro(el))
    }

    static procuraLivroGenero (genero: string): string[]{
        const normalizado = genero.toLowerCase().trim();
        return Livro.listaLivros.filter((el) => el.generos.some((g) => g.nomeGenero.toLowerCase().includes(normalizado))).map((el) => Livro.exibirLivro(el))
    }

}