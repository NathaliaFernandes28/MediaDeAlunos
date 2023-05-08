let n1 = prompt("Primeira Nota:");
n1 = parseFloat(n1);
let n2 = prompt("Segunda Nota:");
n2 = parseFloat(n2);
let n3 = prompt("Terceira Nota:");
m3 = parseFloat(n3);

let media = (n1 + n2 + n3) / 3;

if (n1 === 0 || n2 === 0 || n3 === 0 || media <= 5) {
  alert("Desculpe, não foi dessa vez!");
} else {
  alert("Parabéns! Você foi aprovado!");
}
