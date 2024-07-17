// Atividade Dois: Crie uma classe chamada Pessoa . Nessa classe você terá o seu
// método mágico com os seguintes atributos: nome, sobrenome, nome_do_pai,
// nome_da_mae, numero_rg, numero_cpf, data_de_nascimento.

// a) Faça um arquivo para teste onde você peça para a pessoa os dados dela e mostre
// no final o resultado;

// b) Crie um módulo que calcule a idade da pessoa e imprima. Caso seja menor de
// idade, faça um print mostrando os responsáveis (pais), caso seja de maior, apenas diga
// que não é necessário responsável.

import { Pessoa } from './Pessoa';
import * as readLineSync from 'readline-sync';

const pessoa = new Pessoa(
        readLineSync.question("Qual seu nome?"),
        readLineSync.question("Qual o seu sobrenome?"),
        readLineSync.question("Qual o nome do pai?"),
        readLineSync.question("Qual o nome da mae?"),
        readLineSync.question("Qual o numero do RG?"),
        readLineSync.question("Qual o numero do CPF?"),
        readLineSync.questionInt("Qual o ano do seu nascimento?"),
        readLineSync.questionInt("Qual o mes do seu nascimento?"),
        readLineSync.questionInt("Qual o dia do seu nascimento?")
    );

console.log("Calculando a idade...")
console.log(pessoa.calcularIdade())
readLineSync.question("Pressione qualquer tecla para continuar...")
console.log(pessoa.getPessoa())
