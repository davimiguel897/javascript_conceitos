const entrada = require('readline-sync');

const produto = entrada.question("Qual o nome do produto? ")
const qtdPorHora = entrada.questionInt("Quantas pecas sao produzidas por hora? ");
const horas = entrada.questionFloat("Quantas horas foram trabalhadas? ")

const prodDiaria = qtdPorHora * horas

console.log(`Nome do produto: ${produto}`)
console.log(`Quantidade produzida por hora: ${qtdPorHora}`)
console.log(`Producao diaria: ${prodDiaria}`)