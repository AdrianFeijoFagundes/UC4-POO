export class PilhaDePratos {
    private pratos: string[] = []

    public addPrato(prato: string): void {
        this.pratos.push(prato);
    }

    public retirarPrato(): string | undefined {
        return this.pratos.pop();
    }

    public peek():string | undefined {
        return this.pratos[this.pratos.length - 1];
    }

    public isEmpty(): boolean {
        return this.pratos.length === 0
    }

    public size(): number {
        return this.pratos.length
    }

    public clear(): void {
        this.pratos = []
    }
}