const idade = prompt("Digite sua Idade");

if (idade >= 16 && idade < 18 || idade > 70) {
    console.log("Facultativo");
    alert ("Facultativo");
} else if (idade >= 18 ){
    console.log("Pode Votar");
    alert ("Pode Votar");
}else{
    console.log("Não vota");
    alert ("Não Votar");
}
