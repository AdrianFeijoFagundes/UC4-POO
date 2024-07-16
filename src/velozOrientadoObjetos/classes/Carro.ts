export class Carro {

    private modelo: string;
    private gasolina: number;
    private kmPorLitro: number; 
    private maxGasolina: number;

    constructor(modelo: string,kmPorLitro: number, maxGasolina: number) {
        this.modelo = modelo;
        this.gasolina = maxGasolina;
        this.kmPorLitro = kmPorLitro;
        this.maxGasolina = maxGasolina;
    }

    public andar(distancia: number): void {
        let gasto = this.kmPorLitro / distancia;
        if (gasto > this.gasolina) {
            console.log("Gasolina insufiente para percorrer essa distancia")
            return;
        }
        
        this.gasolina -= gasto; 
        
    }
    public getGasolina() : number {
        return this.gasolina;
    }
    public setGasolina(gasolina: number) : void {
        let temp = this.maxGasolina - this.gasolina;
        if (temp > gasolina) {
            console.log("A quantidade de gasolina ultrapassa a capacidade do tanque.");
            return;
        }
        this.gasolina += gasolina;
    }
    public getModelo(): string {
        return this.modelo;
    }
}