/*
pilha
stack
lifo
*/
export class Pilha<T> { // T é Type -> tipo genérico
    private elements : T[] = []

    // add 1 elemento ao final do topo
    public pushPilha(item: T): void {
        this.elements.push(item);
    }

    public popPilha(): T | undefined {
        return this.elements.pop();
    }

    public peek(): T | undefined {
        return this.elements[this.elements.length - 1];
    }

    public isEmpty(): boolean {
        return this.elements.length === 0
    }

    public size(): number {
        return this.elements.length;
    }

    public clear(): void {
        this.elements = []
    }
}

let minhaPilha = new Pilha<number>();