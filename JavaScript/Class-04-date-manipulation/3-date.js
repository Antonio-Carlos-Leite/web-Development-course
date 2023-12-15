const dateMillisec = new Date().getTime();
const dateNow = new Date();

console.log(dateMillisec);
console.log(dateNow.toLocaleString("pt-BR"));
console.log(dateNow.toLocaleDateString("pt-BR"));
console.log(dateNow.toLocaleTimeString("pt-BR"));

console.log(dateNow.getDay()); // dia da semana
console.log(dateNow.getDate()); // o dia 
console.log(dateNow.getMonth()); // o mês
console.log(dateNow.getFullYear()); // o ano

// dateNow .setDate(dateNow.getDate() +30);
// dateNow .setMonth(dateNow.getMonth() +12);
// dateNow .setFullYear(dateNow.getFullYear() +10);

console.log(dateNow.toLocaleDateString("pt-BR"));

// dateNow.setHours(dateNow.getHours() + 23);
// dateNow.setMinutes(dateNow.getMinutes() + 60);
// dateNow.setSeconds(dateNow.getSeconds() + 23);
// dateNow.setMilliseconds(dateNow.getMilliseconds() + 23);


console.log(dateNow.toLocaleTimeString("pt-BR") + ":" + dateNow.getMilliseconds());
console.log(dateNow);

console.log(dateNow.toLocaleDateString("pt-BR", {
    weekday: "long",
    day:"2-digit",
    month: "long",
    year: "2-digit"
}));

const date1 = new Date("2023-12-13");
const date2 = new Date("2024-09-29");

console.log((date1 - date2) / 1000 / 60 / 60 /24);