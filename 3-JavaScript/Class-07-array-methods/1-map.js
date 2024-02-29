const array = [1, 2, 3];

const newArray = array.map((value) => value * 2);

// inmutable
console.log(array);
console.log(newArray);

const films = [
    "De volta para o futuro",
    "Os caça fantasmas",
    "O exterminador do futuro",
    "Rock",
    "Rambo",
    "O guarda-costas",
];

const newFilms = films.map((film) => film.toLocaleUpperCase());
console.log(newFilms);

["A", "B", "C"].map((value, index, array) =>{
    console.log({value, index, array});
});

const rectangles = [
    {width: 4, height: 5},
    {width: 7, height: 3},
    {width: 8, height: 5},
];

// heigher-order function
const areas = rectangles.map((rectangle, index) =>{
    return {
        name : `Retângulo ${index +1}`,
        area: rectangle.width * rectangle.height + "m²",
    };
})

console.log(areas);
console.table(areas);