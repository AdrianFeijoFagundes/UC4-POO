export interface Aluno {
    matricula: number;
    nome: string;
    notaProva1: number;
    notaProva2: number;
    notaTrabalho: number;
    media(): number;
    final(): number;
}

export class Aluno implements Aluno {
    matricula: number;
    nome: string;
    notaProva1: number;
    notaProva2: number;
    notaTrabalho: number;
    
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number){
        this.matricula = matricula;
        this.nome = nome;
        this.notaProva1 = notaProva1; 
        this.notaProva2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }
    
    media(): number {
        return (this.notaProva1 + this.notaProva2) / 2;
    }
    final(): number {
        return (this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3;
    }
}