// function sunNumbers() {
//     console.log('Dentro da função');
// }

// sunNumbers();


//named


// parameters
function sunNumbers(text) {
    console.log(text);
}

sunNumbers('A Ursupadora'); // arguments
sunNumbers('Maria do Bairo'); // arguments
sunNumbers('Rebelde'); // arguments


function sunNumbers(num1, num2) {
    const sun = num1 + num2;
    console.log(sun);
}

sunNumbers(20,3);
sunNumbers(2,30);
sunNumbers(200,500);


function sunNumbers(num1 = 0, num2 = 1) {
    const sun = num1 + num2; // key operator
    return sun;
}

console.log(sunNumbers(20,3));

const result = sunNumbers(2,30);
console.log(result);

// anonymous

const sun = function (num1, num2) {
    return num1 + num2
} 

// arrow

const sunNum1Num2 = (num1, num2) => num1 + num2;
console.log(sunNum1Num2(2, 3));
