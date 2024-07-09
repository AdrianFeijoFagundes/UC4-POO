import { Jogo, JogoEletronico, JogoDeTabuleiro } from "./classes/Jogo";
import { BibliotecaDeJogos } from "./classes/BibliotecaJogos";
// Exemplo de uso
const jogo1 = new Jogo('Gta 5', 'Mundo Aberto', 18);
const jogo2 = new JogoEletronico('Minecraft', 'Mundo Aberto', 10, 'PC');
const jogo3 = new Jogo('Bully', 'Semi Aberto', 18);
const jogo4 = new JogoDeTabuleiro('Pokemon', 'RPG', 10, 2);

const biblioteca = new BibliotecaDeJogos();

biblioteca.adicionarJogo(jogo1);
biblioteca.adicionarJogo(jogo2);
biblioteca.adicionarJogo(jogo3);
biblioteca.adicionarJogo(jogo4);

console.log(biblioteca.listarJogos());
console.log("remover minecraft")
biblioteca.removerJogo('Minecraft')
console.log(biblioteca.listarJogos());