import { Usuario } from "./Classes/Usuario";
import { Admin } from "./Classes/Admin";
import { Genero } from "./Classes/Genero";
import promptSync from "prompt-sync";
import { Livro } from "./Classes/Livro";
import { menuVisitante } from "./utils/menuVisitante";
import { acervo } from "./utils/acervo";
const prompt = promptSync();

// menu principal
const newAdmin = new Admin ("admin", "admin")


// Usuário: Minha conta (alterar dados) | Ver minhas locações | Listar Acervo (filtros) | Sair
// Admin: Minha conta (alterar dados) | Locações | Gerenciar Usuários (filtros) | Listar Acervo (filtros) | Sair


// ---------------- INSTANCIANDO GENEROS ---------------

const generoFiccao = new Genero("Ficção Científica");
const generoFantasia = new Genero("Fantasia");
const generoTerror = new Genero("Terror");
const generoRomance = new Genero("Romance");
const generoAventura = new Genero("Aventura");
const generoHistoria = new Genero("História");
const generoBiografia = new Genero("Biografia");
const generoDrama = new Genero("Drama");
const generoPolicial = new Genero("Policial");
const generoComedia = new Genero("Comédia");

// --------------- INSTANCIANDO LIVROS -----------------------------
const livro1 = new Livro("O Guia do Mochileiro das Galáxias", "Douglas Adams", [generoFiccao], "", "", new Date(1979, 0, 1))
const livro2 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", [generoFantasia],  "", "", new Date(1954, 6, 29));
const livro3 = new Livro("Drácula", "Bram Stoker", [generoTerror], "", "", new Date(1897, 4, 26));
const livro4 = new Livro("Orgulho e Preconceito", "Jane Austen",  [generoRomance], "", "", new Date(1813, 0, 28));
const livro5 = new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", [generoFantasia], "", "", new Date(1997, 5, 26));
const livro6 = new Livro("O Código Da Vinci", "Dan Brown", [generoPolicial], "", "", new Date(2003, 2, 18));
const livro7 = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", [generoAventura], "", "", new Date(1943, 3, 6));
const livro8 = new Livro("O Diário de Anne Frank", "Anne Frank", [generoHistoria], "", "", new Date(1947, 5, 25));
const livro9 = new Livro("Steve Jobs", "Walter Isaacson", [generoBiografia], "", "", new Date(2011, 9, 24));
const livro10 = new Livro("O Corvo", "Edgar Allan Poe", [generoTerror], "", "", new Date(1845, 1, 1));
const livro11 = new Livro("A Comédia Humana", "Honoré de Balzac", [generoComedia], "", "", new Date(1842, 3, 1));
const livro12 = new Livro("A Cabana", "William P. Young", [generoDrama], "", "", new Date(2007, 2, 1));

menuVisitante();
// -------------- TESTES -------------------
// const newUsuario = new Usuario ("Jade", "028", "aqui", "123")
// newUsuario.exibir();
// newAdmin.exibir();
// Livro.exibirAcervo();
// acervo()