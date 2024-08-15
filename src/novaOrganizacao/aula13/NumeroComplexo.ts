export class NumeroComplexo {
    private parteReal: number
    private parteImaginario: number 

    constructor(parteReal: number, parteImaginario: number ) {
        this.parteReal = parteReal;
        this.parteImaginario = parteImaginario;
    }

    public getParteReal(): number {
        return this.parteReal;
    }
    public setParteReal(parteReal: number): void {
        this.parteReal = parteReal
    }

    public getParteImaginario(): number {
        return this.parteImaginario;
    }
    public setParteImaginario(parteImaginario: number): void {
        this.parteReal = parteImaginario;
    }

    public somar(outroComplexo: NumeroComplexo): NumeroComplexo {
        let real = this.parteReal + outroComplexo.getParteReal();
        let imaginario = this.parteImaginario + outroComplexo.getParteImaginario();
        return new NumeroComplexo(real, imaginario);
    }
    public subtrair(outroComplexo: NumeroComplexo): NumeroComplexo {
        let real = this.parteReal - outroComplexo.getParteReal();
        let imaginario = this.parteImaginario - outroComplexo.getParteImaginario();
        return new NumeroComplexo(real, imaginario);
    }
    public multiplicar(outroComplexo: NumeroComplexo): NumeroComplexo {
        let real = (this.parteReal * outroComplexo.getParteReal()) - (this.parteImaginario * outroComplexo.getParteImaginario());
        let imaginario = (this.parteReal * outroComplexo.getParteImaginario()) + (this.parteImaginario * outroComplexo.getParteReal());
        return new NumeroComplexo(real, imaginario);
    }
    public dividir(outroComplexo: NumeroComplexo): NumeroComplexo {

        let partePotenciacao = (outroComplexo.getParteReal() * outroComplexo.getParteReal()) + (outroComplexo.getParteImaginario() * outroComplexo.getParteImaginario());

        let real = ((this.parteReal * outroComplexo.getParteReal()) + (this.parteImaginario * outroComplexo.getParteImaginario())) / partePotenciacao;

        let imaginario = ((this.parteImaginario * outroComplexo.getParteReal()) - (this.parteReal * outroComplexo.getParteImaginario())) / partePotenciacao;
        return new NumeroComplexo(real, imaginario);
    }
    public modulo(): number {
        return Math.sqrt((this.parteReal**2) + (this.parteImaginario**2));
    }
    public equals(outroComplexo: NumeroComplexo): boolean {
        return (this.parteImaginario === outroComplexo.getParteImaginario() && this.parteReal === this.getParteImaginario())
    }
    public toString(): string {
        return this.parteReal + " + " + this.parteImaginario + "i"
    }

}


/*


*/ 

