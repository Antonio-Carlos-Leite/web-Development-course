// desafio 18: Faça uma função que receba um array de números
// Retorne um objeto com a soma dos 3 maiores e os 3 menores números

const numbers = [10, 2, 13, 4, 25, 9];
const result = sunMinMax(numbers);

// function sunMinMax(numbers) {
//     numbers.sort((a, b) => a - b);
//     const menores = numbers.slice(0, 3).reduce((a, b) => a + b, 0);
//     const maiores = numbers.slice(-3).reduce((a, b) => a + b, 0);

//     return {
//         somaMaior : maiores,
//         somaMenor : menores
//     };
// }
// console.log(numbers);
// console.log(result);


function sunMinMax(numbers) {
    numbers.sort((a, b) => a - b);
    const menores = numbers.filter((value, index) => index < 3).reduce((a, b) => a + b, 0);
    const maiores = numbers.filter((value, index) =>index >= numbers.length - 3).reduce((a, b) => a + b, 0);

    return {
        somaMaior : maiores,
        somaMenor : menores
    };
}
console.log(numbers);
console.log(result);

