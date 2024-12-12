export class Genero {
    protected static contadorID: number=1;
    protected idGenero: number;
    protected nomeGenero: string;
    protected static listaGeneros: Genero[]=[];

    constructor (nomeGenero: string){
        this.idGenero=Genero.contadorID++;
        this.nomeGenero=nomeGenero;
        
        this.cadastraGeneros
    }
    
    procuraGeneros(nomeGenero: string): boolean {
        return Genero.listaGeneros.find((el) => el.nomeGenero === nomeGenero) ? true : false
    }

    cadastraGeneros(nomeGenero: string):string{
        if (this.procuraGeneros(nomeGenero)){
            return "Gênero já cadastrado."
        } else {
            const novoGenero = new Genero (nomeGenero)
            Genero.listaGeneros.push(this)
            return "Novo gênero cadastrado!"
        }
    }
}