import { Junior } from "./Junior"
import { Pleno } from "./Pleno"
import { Senior } from "./Senior"



export class EmpresaDev {
    public team: (Pleno | Junior | Senior)[]
    
    constructor() {
        this.team = []
    }
    public getTeamMethod():void {

        for (let developer of this.team) {
            if (developer instanceof Pleno) return developer.criarFeature()
            if (developer instanceof Junior) return developer.resolverBugs()
            if (developer instanceof Senior) return developer.administrarEquipe()
        }
    }

};

