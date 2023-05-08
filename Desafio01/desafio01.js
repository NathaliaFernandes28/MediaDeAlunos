let number01 = prompt("Digite um número:");

number01 = parseInt(number01);

let number02 = prompt("Digite um outro número:");

number02 = parseInt(number02);

const subtracao = number01 - number02;

const multiplicacao = number01 * number02;

const divisao = number01 / number02;

const soma = number01 + number02;

alert(
  " Subtracao: " +
    subtracao +
    " \nMultiplicação: " +
    multiplicacao +
    "\nDivisão: " +
    divisao +
    "\nSoma: " +
    soma
);
