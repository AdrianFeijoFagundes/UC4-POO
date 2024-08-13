import { Contador } from "./Contador";
import { Ponto2D, PontoEx, PontoXY } from "./Ponto2D";

let contador = new Contador()

// console.log(contador)

// contador.incrementar()
// console.log(contador.valor())
// contador.incrementar()
// console.log(contador.valor())
// contador.zerar()
// console.log(contador.valor())

// for (contador.valor(); contador.valor() < 10; contador.incrementar()) {

// }

const pA = new Ponto2D();
const pB = new PontoXY(30,40);
const pC = new PontoEx(pB);

console.log("Ponto A")
pA.setCoordenades(10,15)
console.log(pA.toString())
console.log("Ponto B")
console.log(pB.toString())
console.log("Ponto C")
console.log(pC.toString())

console.log("O ponto B é igual ao ponto C?", pB.equals(pC))
console.log("A distancia entre o ponto A e o ponto B: ", pA.distancia(pB))