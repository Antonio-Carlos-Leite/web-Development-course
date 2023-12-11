// Crie uma função que calcule o IMC do usuario
// Afunção deve receber os parâmetros de height e de weight;
// Escreva na tela o IMC do usuario

function imcCAlc(height, weight) {
    const imc = weight / (height ** 2);
    return imc.toFixed(2);
}
console.log(imcCAlc(1.65, 65));