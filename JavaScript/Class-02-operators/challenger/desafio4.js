// Solicite 2 numeros e apresente:
// as operações e os resultados escrevendo no documento(função write).
// crie constantes e atribua as operações de
//+,-,*,/ e raiz quadrada para os numeros solicitados.

const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o sugundo número: "));

const adicao = num1 + num2;
const subtracao = num1 - num2;
const divisao = num1 / num2;
const multiplicacao = num1 * num2;
const raiz = Math.sqrt(multiplicacao);
const raizNum1 = Math.sqrt(num1);
const raizNum2 = Math.sqrt(num2);
const resto = num1 % num2;
const expo = num1 ** num2;



document.write(`A Soma de ${num1} e de ${num2} é igual a ${adicao} <br/>`);

document.write(`A Subtração de ${num1} e de ${num2} é igual a ${subtracao} <br/>`);

document.write(`A Divisão de ${num1} e de ${num2} é igual a ${divisao.toFixed(2)} <br/>`);

document.write(`A Multiplicação de ${num1} e de ${num2} é igual a ${multiplicacao} <br/>`);

document.write(`A Raiz Quadrada de ${multiplicacao} é igual a ${raiz.toFixed(2)} <br/>`);

document.write(`A Raiz Quadrada de ${num1} é igual a ${raizNum1.toFixed(2)} <br/>`);

document.write(`A Raiz Quadrada de ${num2} é igual a ${raizNum2.toFixed(2)} <br/>`);

document.write(`O Resto da divisão de ${num1} e de ${num2} é igual a ${resto} <br/>`);

document.write(`A Exponenciação de ${num1} e de ${num2} é igual a ${expo} <br/>`);