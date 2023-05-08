var n1 = prompt("Digite o primeiro número:");
n1 = parseFloat(n1);
var n2 = prompt(" Digite o segundo número:");
n2 = parseFloat(n2);
var n3 = prompt("Digite o terceiro número:");
n3 = parseFloat(n3);

var media = (n1 + n2 + n3) / 3;

if (media > 5 && n1 > 0 && n2 > 0 && n3 > 0) {
  alert("Parabéns! Você foi aprovado");
} else {
  alert("Desculpe, não foi dessa vez!");
}
