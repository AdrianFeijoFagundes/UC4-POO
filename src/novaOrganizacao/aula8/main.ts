import { Data } from "./Data";
import { Voo } from "./Voo";

const voo = new Voo('01', new Data(1,12,2002))


voo.ocupa(100)
voo.ocupa(87);
voo.ocupa(11);
voo.ocupa(1);
console.log(voo)
console.log('------')
console.log(voo.verifica(99))
console.log('------')
console.log(voo.verifica(1))
console.log('------')
console.log(voo.vagas())
console.log('------')
console.log(voo.proximoLivre())