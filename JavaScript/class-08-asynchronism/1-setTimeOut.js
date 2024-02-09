console.log("Principio");

const timeoutId = setTimeout(() => {
  console.log("Ovo");
}, 0);

console.log("timeout", timeoutId);
console.log("Galinha");

let count = 0;

const intervalId = setInterval(() => {
  console.log(count);
  count++;

  if (count == 10) {
    clearInterval(intervalId);
    console.log("GO!");
  }
}, 1000);

console.log("Interval", intervalId);
