// import { adicao, subtracao, multiplicacao, divisao } from './calculador.js';

// import * as calculador from './calculador.js';

import raizQuadrada,
{
    adicao as soma,
    subtracao,
    multiplicacao,
    divisao
} from './calculadora.js';



const a = 10;
const b = 5;

console.log(`Adição: ${a} + ${b} = ${soma(a, b)}`);
console.log(`Subtração: ${a} - ${b} = ${subtracao(a, b)}`);
console.log(`Multiplicação: ${a} * ${b} = ${multiplicacao(a, b)}`);
console.log(`Divisão: ${a} / ${b} = ${divisao(a, b)}`);

console.log(raizQuadrada(5));

async function carregarMensagem() {
    const { mostrarMensagem } = await import("./modulo_dinamico.js");
    mostrarMensagem();
}

setInterval(() => {
    carregarMensagem();
}, 2000);

