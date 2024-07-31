export class Arqueiro{
    public usarArco():void {
        console.log("Tiro Mortal")
    }
};
export class Mago{
    public usarMagia():void {
        console.log("Bola de Fogo")
    }
    
};
export class Guerreiro{
    public usarEspada():void {
        console.log("Corte Rápido")
    }
    
};
export class GrupoDoHeroi {
    public membros: (Mago | Arqueiro | Guerreiro)[]
    
    constructor() {
        this.membros = []
    }
    public ():void {

        for (let jogador of this.membros) {
            if (jogador instanceof Mago) jogador.usarMagia()
            if (jogador instanceof Guerreiro) jogador.usarEspada()
            if (jogador instanceof Arqueiro) jogador.usarArco()
        }
    }

};

