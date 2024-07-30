// ### Questão 3 - Vôos Encantados

// Escreva uma classe em que cada objeto representa um vôo mágico que acontece
// em determinada data e horário. Cada vôo possui no máximo 100 passageiros, e a
// classe permite controlar a ocupação das vagas. A classe deve ter os seguintes
// métodos:

export interface Voo {
    numeroVoo: string;
    cadeiras: Array<number>;
    // data: Data,
    proximoLivre(): number;
    verifica(cadeira: number): boolean;
    ocupa(cadeira: number): boolean;
    vagas(): number;
    getVoo(): string;
    // getData(): Data;
    clone(): Voo;
}


export class Voo implements Voo {
    public numeroVoo: string;
    public cadeiras: number[];

    constructor(numeroVoo: string) {
        this.numeroVoo = numeroVoo
        this.cadeiras = []
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

    public proximoLivre(): number {
                
        return 1    
    }
}