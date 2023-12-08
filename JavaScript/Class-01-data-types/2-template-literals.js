console.log("test");

console.log("Carlos");
console.log('Carlos');
console.log(`Carlos`);

let course = "Desenvolvimento Web"
console.log("Turma de " + course); // Concatenation

let num1 = "30";
let num2 = 20;
num1 = Number(num1); // Type conversion

console.log(num1 + num2); // Type coersion

// grouping operator
console.log("A soma de num1 e num2 é " + (num1 + num2));

// Interpolation
console.log("A soma de " + num1 + " e " + num2 +" = " + (num1 + num2));

// template Literals
let sumNunbers = num1 + num2;
console.log(`A soma de ${num1} e ${num2} = ${sumNunbers}`);
//console.log(`A soma de ${num1} e ${num2} = ${num1 + num2}`);