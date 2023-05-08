let number01 = prompt("Digite um número:");
number01 = parseInt(number01);
let number02 = prompt("Digite um segundo número:");
number02 = parseInt(number02);

alert(
  "O resto da divisão de " +
    number01 +
    " por " +
    number02 +
    " é : " +
    (number01 % number02) +
    "\n O número " +
    number01 +
    " elevado a " +
    number02 +
    " é : " +
    number01 ** number02
);
