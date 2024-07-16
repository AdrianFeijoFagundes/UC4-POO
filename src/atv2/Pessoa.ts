// Atividade Dois: Crie uma classe chamada Pessoa . Nessa classe você terá o seu
// método mágico com os seguintes atributos: nome, sobrenome, nome_do_pai,
// nome_da_mae, numero_rg, numero_cpf, data_de_nascimento.
// a) Faça um arquivo para teste onde você peça para a pessoa os dados dela e mostre
// no final o resultado;
// b) Crie um módulo que calcule a idade da pessoa e imprima. Caso seja menor de
// idade, faça um print mostrando os responsáveis (pais), caso seja de maior, apenas diga
// que não é necessário responsável.

export class Pessoa {
    public nome: string;
    public sobrenome: string;
    public nome_do_pai: string;
    public nome_da_mae: string;
    public numero_rg: string;
    public numero_cpf: string;
    public data_de_nascimento: number[];

    constructor(nome: string, sobrenome: string, nome_do_pai: string, nome_da_mae: string, numero_rg: string, numero_cpf: string, ano: number, mes: number, dia: number) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.nome_do_pai = nome_do_pai
        this.nome_da_mae = nome_da_mae
        this.numero_rg = numero_rg
        this.numero_cpf = numero_cpf
        this.data_de_nascimento = [ano, mes, dia]
    }

    calcularIdade(): void  {
        let date = new Date()
        let year = date.getFullYear()
        let day = date.getDate()
        let month = date.getMonth()
        let fezAniversarioEsseAno = false
            // mes que de nascimento
        if (this.data_de_nascimento[1] < month) {
            
            fezAniversarioEsseAno = true; 
                    // mes que de nascimento                dia de nascimento
        } else if (this.data_de_nascimento[1] === month && this.data_de_nascimento[2] > day) {
            fezAniversarioEsseAno = true;
        }
        
        
        let diferencaAno = year - this.data_de_nascimento[0]

        if ((diferencaAno > 18) || (diferencaAno === 18 && fezAniversarioEsseAno)) {
            
            console.log(`É necessário que seu pai ${this.nome_do_pai} ou sua mâe ${this.nome_da_mae} esteja presente`)
            return
        }
        console.log('Não é necessário responsável')
    }
}           