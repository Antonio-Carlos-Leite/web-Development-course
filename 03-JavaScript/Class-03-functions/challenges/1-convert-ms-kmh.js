// Declare u,a função para converter velocidade de m/s para km/h
// Solicite a velocidade via prompt e passe como argumento
// Execulte a função e escreva o resultado


// function convert() {
//     const convert = Number(prompt("Digite um número: "));

//     const calcMs = convert * 3.6;

//     document.write(`${convert} m/s equivale a:  ${calcMs}`);
// }

// convert();

function convertToKmh(speedMs) {
    return speedMs * 3.6;
}

const userSpeedMs = prompt("Digite sua velocidade em M/S");

alert(convertToKmh(userSpeedMs));
console.log("teste");