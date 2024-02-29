// Call Stack
console.log(1);

//Task
setTimeout(() => {
    console.log(2);
}, 1000);

//Call Stack
for (let index = 0; index < 1000; index++) {
    console.log(index);
}

//Micro Task
queueMicrotask(() => {
console.log(4);
})