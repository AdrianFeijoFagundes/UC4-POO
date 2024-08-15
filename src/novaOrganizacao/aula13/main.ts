import { Contador } from "./Contador";
import { NumeroComplexo } from "./NumeroComplexo";
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

// const pA = new Ponto2D();
// const pB = new PontoXY(30,40);
// const pC = new PontoEx(pB);

// console.log("Ponto A")
// pA.setCoordenades(10,15)
// console.log(pA.toString())
// console.log("Ponto B")
// console.log(pB.toString())
// console.log("Ponto C")
// console.log(pC.toString())

// console.log("O ponto B é igual ao ponto C?", pB.equals(pC))
// console.log("A distancia entre o ponto A e o ponto B: ", pA.distancia(pB))


const numero = new NumeroComplexo(10,5);
const numero2 = new NumeroComplexo(20,10);

console.log("numero 1:")
console.log(numero.toString())
console.log("numero 2:")
console.log(numero2.toString())

const numero3 = numero.somar(numero2)
console.log("soma: ", numero3.toString())
const numero4 = numero.subtrair(numero2)
console.log("subtrair: ", numero4.toString())
const numero5 = numero.multiplicar(numero2)
console.log("multiplicar: ", numero5.toString())
const numero6 = numero.dividir(numero2)
console.log("dividir: ", numero6.toString())

console.log("modulo numero 1: ", numero.modulo())