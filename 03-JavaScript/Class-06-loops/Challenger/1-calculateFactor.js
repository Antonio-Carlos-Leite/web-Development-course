// desafio 16: crie uma função para calcular o fatorial de um numero
// passe o numero via argumento e use um for para a operação

function calculateFactor(number) {
    // 5 * 4 * 3 * 2 * 1 = 120
    let result = 1;
    for (let i = number; i != 0; i--) {
        result = result * i;
    }
    return result;
}

console.log(calculateFactor(5));