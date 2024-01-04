const numbers= [1, 2, 3, 4, 5, 6, 7, 8];

const filteredNumbers = numbers.filter((value) => value < 5);

console.log(numbers);
console.log(filteredNumbers);

const students = [
    {id: 1, name:"Emanuel", grade: 8 },
    {id: 2, name:"Pablo", grade: 9 },
    {id: 3, name:"luiza", grade: 8 },
    {id: 4, name:"Natanael", grade: 7 },
    {id: 5, name:"Antonio Carlos", grade: 10 },
    {id: 6, name:"Pedro", grade: 7 },
    {id: 7, name:"Hamilton", grade: 7 },
    {id: 8, name:"Matheus", grade: 9 },
];

// const filteredStudents = students.filter((student) => student.grade >= 9);
// console.log(filteredStudents);

const studentName = prompt("Digite o nome do aluno: ");

const filteredStudents = students.filter((student) => student.name.toLowerCase().includes(studentName.toLowerCase()));
console.table(filteredStudents);

