function convertTemp(temperatura) {
    try {
      const valor = parseFloat (temperatura);  
      const unidade = temperatura.slice(-1).toUpperCase();  
        if (isNaN(valor) || (unidade !== 'C' && unidade !=='F')) {
            throw "Entrada inválida. Use o formato correto, ex: '10C' ou '50F'.";
        }

        let resultado;
        if (unidade === 'C') {
            resultado = (valor * 9 / 5) + 32 + 'F';
        } else {
            resultado = ((valor - 32) * 5 / 9) + 'C';
        }

        return `A temperatura ${temperatura} e igual a ${resultado}`;
    } catch (error){
        return `Erro: ${error}`;
    } 
}

console.log(convertTemp('10C'));
console.log(convertTemp('50F'));
console.log(convertTemp('32x'));