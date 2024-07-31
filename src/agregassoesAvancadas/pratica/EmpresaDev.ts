import { Junior } from "./Junior"
import { Pleno } from "./Pleno"
import { Senior } from "./Senior"



export class EmpresaDev {
    public team: (Pleno | Junior | Senior)[]
    
    constructor() {
        this.team = []
    }
    public ():void {

        for (let developer of this.team) {
            if (developer instanceof Pleno) developer.criarFeature()
            if (developer instanceof Junior) developer.resolverBugs()
            if (developer instanceof Senior) developer.administrarEquipe()
        }
    }

};

