const prompt = require("prompt-sync")();

function numbers() {
    const numberInter = parseInt(prompt("Por favor, digite um numero inteiro: "));
    console.log("Ele foi dividido por 2 = " + numberInter / 2);

    const numberDivididoPorCinco = parseInt(prompt("Por favor, digite um valor decimal: "));
    console.log("Ele foi dividido por 5 = " + numberDivididoPorCinco / 5);

    const valorDecimal = parseInt(prompt("Por favor, digite um valor decimal: "));
    const divisor = parseInt(prompt("Por favor, digite a quantidade de vezes que deseja dividir o valor anterior: "));

    console.log("Resultado = " + valorDecimal / divisor);
}
// numbers();

function dadosPessoais() {
    let nome = prompt("Por favor, digite seu nome: ");
    let endereco = prompt("Por favor, digite seu endereço: ");
    let telefone = prompt("Por favor, digite seu telefone: ");

    console.log("Nome: " + nome);
    console.log("Endereco: " + endereco);
    console.log("Telefone: " + telefone);
}
// dadosPessoais();

function trianguloEquilatero() {

    function calcularAreaTrianguloEquilatero(lado) {
        return (Math.sqrt(3) / 4) * Math.pow(lado, 2)
    }
    let lado = parseFloat(prompt("Por favor, digite o lado do triangulo equilátero: "))
    let area = calcularAreaTrianguloEquilatero(lado)

    console.log("A área total do triangulo equilatero com o valor passado anteriormente é " + area);
}

// trianguloEquilatero();

let pow = Math.pow(5, 2);
let sqrt = Math.sqrt((3));
console.log(pow, sqrt)