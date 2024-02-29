let num = 10; //global
const pi = 3.14;

var myName = "Antonio";
console.log(myName);

{
    let num = 20; // local
    var myName = "Carlos"
    num = 30

    console.log(num);
    console.log(pi);
    console.log(myName);
}
console.log(myName);
num = 40;
// pi = 100; // const error
console.log(num);
console.log(pi);