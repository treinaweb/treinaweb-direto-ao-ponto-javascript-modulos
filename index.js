import { adicao, subtracao, multiplicacao, divisao } from './calculadora.mjs';

const a = 10;
const b = 5;

console.log(`Adição: ${a} + ${b} = ${adicao(a, b)}`);
console.log(`Subtração: ${a} - ${b} = ${subtracao(a, b)}`);
console.log(`Multiplicação: ${a} * ${b} = ${multiplicacao(a, b)}`);
console.log(`Divisão: ${a} / ${b} = ${divisao(a, b)}`);