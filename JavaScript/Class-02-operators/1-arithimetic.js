// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_str uctures

// Primitive Values : String, Number, Boolean...

// let 123variable;
// let my-variable;
// let my variable;
// let my#variable;
// let if;
// let break;

// String
let studentName = "Emanuel";
let age = "30";

console.log(studentName);
console.log(typeof age);

// Number: integer, float, NaN, Infinity
console.log(typeof 32);
console.log(typeof 32.5);
console.log(typeof (32 + 5));
console.log(typeof 15 + "Emanuel");

console.log(typeof NaN);
console.log(typeof Number("Emanuel"));

console.log(typeof Infinity);
console.log(2 / 0);

let number;
console.log(number);

// Boolean: true or false
console.log(typeof true);
console.log(typeof (10 == 20));
console.log(20 == 20);
console.log(20 == "Emanuel");
console.log(20 != "Emanuel");
console.log(11 == "11");
console.log(11 === "11");


// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

// Arithmetic Operators

// addition ( + )
// subtraction ( - )
// multiplication ( * )
// division ( / )
// remainder ( % )
// exponentiation ( ** ) to square root use " ** 1/2 "

let num1 = "2";
let num2 = 2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);
console.log(16 ** (1 / 2));
console.log(Math.sqrt(16));
console.log(Math.cbrt(8));
console.log(Math.pow(2, 4));

// increment ( ++ )
console.log(num1++); // pos
console.log(num1);

// decrement ( -- )
console.log(--num1); // pre
console.log(num1);

console.log(++num1 + num2);

// Assignment (Atribuição)

num1 = num1 + 2;

num1 += 2;
num1 -= 2;
num1 *= 2;
num1 /= 2;
num1 %= 2;
num1 **= 2;

console.log(num1);