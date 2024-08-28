export class Ponto2D {
    private x: number;
    private y: number;

    constructor() {
        this.x = 0
        this.y = 0
    }

    public getX():number{
        return this.x;
    }
    public setX(x:number):void {
        this.x = x
    }
    public getY():number {
        return this.y
    }
    public setY(y:number):void {
        this.y = y
    }
    public setCoordenades(x:number, y:number) {
        this.x = x;
        this.y = y;
    }
    public copiando(outroPonto: Ponto2D) {
        this.x = outroPonto.getX();
        this.y = outroPonto.getY();   
    }
    public equals(outroPonto: Ponto2D): boolean {
        if ((outroPonto.getX() === this.getX()) && (outroPonto.getX() === this.getX())) {
            return true
        } else {
            return false
        }   
    }
    public toString(): string {
        return `x: ${this.x} y: ${this.y}`;
    }
    /*
    A(x1,y1) B(x2,y2)

    d = /(x2 - x1)² + (y2 - y1)²
    */
    public distancia(outroPonto: Ponto2D): number {
        let x = outroPonto.getX() - this.x
        let y = outroPonto.getY() - this.y
        let z = (x**2) + (y**2)
        let distancia = z * (z / 2)
        return distancia
    }

    public clone(): Ponto2D {
        return new PontoEx(this);
    }
}
export class PontoXY extends Ponto2D{
    constructor (x:number, y:number) {
        super()
        this.setCoordenades(x, y)
    }
}
export class PontoEx extends Ponto2D{
    constructor (outroPonto: Ponto2D) {
        super()
        this.setCoordenades(outroPonto.getX(), outroPonto.getY())
    }   
}