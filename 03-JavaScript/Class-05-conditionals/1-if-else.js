const userAge = 27;
const hasCNH = false;

if (userAge >=18) {
    console.log("Maior de Idade");
} else {
console.log("Menor de Idade");
}

if (userAge >= 18 && hasCNH) {
    console.log("Pode Dirigir");
} else {
    console.log("Não Pode Dirigir");
}

const average = 6;

if (average >= 7) {
    console.log("Aprovado");
} else if (average >=5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}