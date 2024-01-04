const numbers = [0, 2, 3, 10, 1, 5, 4, 8, 6, 7, "4", 9];

console.log(numbers);
console.log(numbers.sort((a, b) => a - b));
console.log(numbers);

const musics = [
    "Robocop Gay",
    "Oceano",
    "Menina Veneno",
    "o papa e Pop",
    "Planeta de Cores",
    "ai se eu te pego",
    "Zóio de Lula"
]

console.log(musics.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;

})
);



const students = [
    {id: 1, name:"Emanuel", grade: 8 },
    {id: 2, name:"Pablo", grade: 9 },
    {id: 3, name:"luíza", grade: 8 },
    {id: 4, name:"Natanael", grade: 7 },
    {id: 5, name:"Antonio Carlos", grade: 10 },
    {id: 6, name:"Pedro", grade: 7 },
    {id: 7, name:"Amilton", grade: 7 },
    {id: 8, name:"Matheus", grade: 9 },
    {id: 8, name:"Érik", grade: 9 },
];

console.table(students.sort((a, b) => {
    a = a.name.localeCompare();
    b = b.name.toLocaleLowerCase();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}
));

console.table(students.sort((a, b) => a.name.localeCompare(b.name)));