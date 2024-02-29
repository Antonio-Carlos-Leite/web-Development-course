// Construa uma lógica para dizer se um número é par ou é ímpar
// Receba o número desejado do usuário via promp
// Escreve na tela o número e se ele é par ou é ímpar

let num = Number(prompt("Digite um número para saber se é par ou é ímpar: "));
let result = num % 2 == 0 ? "Par" :  num % 2 == 1 ? "Ímpar" : "Invalido";

window.alert(`O número ${num} é ${result}`);