export class Fila<T> {
    private elementos: T[] = []

    // adicionar ao fim da fila
    public enfileirar(elemento: T) {
        this.elementos.push(elemento); //unshift
    }
    public  desenfileirar(): T | undefined {
        if (this.estaVazia()) { 
            return undefined;
        } else {
            return this.elementos.shift(); //pop
        }
    }
    public  primeiro(): T | undefined {
        if (this.estaVazia()) { 
            return undefined;
        } 
        return this.elementos[0];   
    }
    public estaVazia(): boolean {
        return this.elementos.length === 0;
    }
    public size(): number {
        return this.elementos.length;
    }
}

