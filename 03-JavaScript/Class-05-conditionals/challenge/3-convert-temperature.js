// function convertTemp(temperatura) {
//     try {
//       const valor = parseFloat (temperatura);  
//       const unidade = temperatura.slice(-1).toUpperCase();  
//         if (isNaN(valor) || (unidade !== 'C' && unidade !=='F')) {
//             throw "Entrada inválida. Use o formato correto, ex: '10C' ou '50F'.";
//         }

//         let resultado;
//         if (unidade == 'C') {
//             resultado = (valor * 9 / 5) + 32 + 'F';
//         } else {
//             resultado = ((valor - 32) * 5 / 9) + 'C';
//         }

//         return `A temperatura ${temperatura} e igual a ${resultado}`;
//     } catch (error){
//         return `Erro: ${error}`;
//     } 
// }

// console.log(convertTemp('10C'));
// console.log(convertTemp('32F'));
// console.log(convertTemp('32x'));



function degreeConvert(degree) {
    const auxDegree = degree.split("");
    const scaleDegree = auxDegree.pop().toUpperCase();
    const newDegree = Number(auxDegree.join(""));
    if (isNaN(newDegree)) throw Error("Valor Inválido");
    if (scaleDegree == "C") {
        return (newDegree * 9) / 5 + 32 + "F";
    } else if (scaleDegree == "F") {
        return ((newDegree - 32) * 5) / 9 +"C";
    } else {
        throw new Error("Escala Inválida");
    }

};
try {
    const temperature = "100c";
    const covertedTemperature = degreeConvert(temperature);
console.log(`${temperature} = ${covertedTemperature}`);
} catch (error) {
    console.error();
};