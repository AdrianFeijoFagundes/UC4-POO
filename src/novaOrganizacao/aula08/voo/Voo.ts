// ### Questão 3 - Vôos Encantados

import { Data } from "./Data";

// Escreva uma classe em que cada objeto representa um vôo mágico que acontece
// em determinada data e horário. Cada vôo possui no máximo 100 passageiros, e a
// classe permite controlar a ocupação das vagas. A classe deve ter os seguintes
// métodos:

export interface Voo {
    // numeroVoo: string;
    // cadeiras: Array<number>;
    // data: Data,
    proximoLivre(): number;
    verifica(cadeira: number): boolean;
    ocupa(cadeira: number): boolean;
    vagas(): number;
    getVoo(): string;
    getData(): Data;
    clone(): Voo;
}


export class Voo implements Voo {
    private numeroVoo: string;
    private cadeiras: number[];
    private data: Data;
    //private passageiros: boolean[]

    constructor(numeroVoo: string, data: Data) {
        this.numeroVoo = numeroVoo
        this.cadeiras = []
        this.data = data
        // this.passageiros = new Array(100).fill(false);
    }

    public proximoLivre(): number {
        let assentoLivre: number = -1 
        for(let i = 1; i <= 100; i++) {
            if (this.cadeiras[i] !== i) {
                    console.log(`O assento ${i} está livre`)
                    assentoLivre = i
            } 
        }
        return assentoLivre;
    }
    
    public verifica(cadeira: number): boolean {
        if(this.cadeiras.indexOf(cadeira) === -1) { 
            console.log("A cadeira ", cadeira, "está livre")
            return true
        } else {
            console.log("A cadeira ", cadeira, "está ocupada")
            return false
        }
    }
    // "ADICIONA" um passageiro
    public ocupa(cadeira: number): boolean {
        if (this.cadeiras.length < 101) {
            if (this.verifica(cadeira)) {
                this.cadeiras.push(cadeira)
                this.cadeiras.sort()
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }    
    
    public vagas(): number {
        let tmp = 100 - this.cadeiras.length
        if (tmp > 1) {
            console.log("Existem", tmp, "vagas")
            return tmp
        }
        return -1
    }
    public getVoo(): string {
        return this.numeroVoo
    }
    public getData(): Data {
        return this.data;
    }
    public clone(): Voo {
        return new Voo(this.numeroVoo, this.data)
    }
}