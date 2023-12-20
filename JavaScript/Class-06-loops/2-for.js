// let count = 1; // flag
// while (count <= 10) {// condicion
//     console.log(count);
//     count++; // container
// }
// console.log("Programa Encerrado!!!");

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let count = 1; count <= 10; count++){
    if (count >= 4 && count <= 6) {
        continue;
    }
    if (count == 9) {
        break;
    }
    if (count % 2 == 0) {
        console.log(count);        
    }
}