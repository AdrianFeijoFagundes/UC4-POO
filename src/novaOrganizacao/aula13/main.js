"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contador_1 = require("./Contador");
var Ponto2D_1 = require("./Ponto2D");
var contador = new Contador_1.Contador();
// console.log(contador)
// contador.incrementar()
// console.log(contador.valor())
// contador.incrementar()
// console.log(contador.valor())
// contador.zerar()
// console.log(contador.valor())
// for (contador.valor(); contador.valor() < 10; contador.incrementar()) {
// }
var pA = new Ponto2D_1.Ponto2D();
var pB = new Ponto2D_1.PontoXY(30, 40);
var pC = new Ponto2D_1.PontoEx(pB);
console.log("Ponto A");
pA.setCoordenades(10, 15);
console.log(pA.toString());
console.log("Ponto B");
console.log(pB.toString());
console.log("Ponto C");
console.log(pC.toString());
console.log("O ponto B é igual ao ponto C?", pB.equals(pC));
console.log("A distancia entre o ponto A e o ponto B: ", pA.distancia(pB));
