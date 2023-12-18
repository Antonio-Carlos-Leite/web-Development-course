const media = prompt("Digite sua nota");

switch (true) {
    case (media >= 90 && media <= 100):
        alert("Nota A");
        break;

    case (media >= 80 && media < 90):
        alert("Nota B");
        break;

    case (media >= 70 && media < 80):
        alert("Nota C");
        break;

    case (media >= 60 && media < 70):
        alert("Nota D");
        break;

    case (media < 60):
        alert("Nota F");
        break;
    default:
    alert("Nota inválida. Digite uma nota entre 0 e 100")
        break;
}

if (media >=70) {
    alert ("Aluno Aprovado");
} else {
    alert("Aluno Reprovado");
}