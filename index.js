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