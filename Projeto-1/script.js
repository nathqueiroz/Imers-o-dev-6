var nome = prompt("Insira o seu nome aqui:");

var valor = prompt("Qual é o valor que deseja converter em Bitcoin?");

var cotacaoDoBitcoin = 118254.24;

var valorEmReal = (valor * cotacaoDoBitcoin).toFixed(2);

alert("O valor em real, " + nome + " , é R$ " + valorEmReal);
