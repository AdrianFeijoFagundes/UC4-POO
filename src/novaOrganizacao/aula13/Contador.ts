export class Contador {
    private cont: number

    constructor() {
        this.cont = 0
    }
    
    public zerar():void {
        this.cont = 0
    }
    public incrementar(): void {
        this.cont++
    }
    public valor(): number {
        return this.cont    
    }
}