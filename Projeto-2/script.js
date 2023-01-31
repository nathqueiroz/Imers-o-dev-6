var nome = prompt("Insira o seu nome aqui:");

var conversaoAnosLuz = prompt(
  nome + ", quantos anos luz você deseja converter em metros?"
);

var valorConvertido = (9.461e15 * conversaoAnosLuz).toFixed(2);

alert(
  "Então, " +
    nome +
    ", " +
    conversaoAnosLuz +
    " anos luz, equivalem a " +
    valorConvertido +
    " metros"
);

var distancia = prompt(
  " Adivinhe qual a distância (arredondada) em anos luz entre a Terra e Próxima Centauri "
);

if (distancia == 4) alert("Parabéns, isso mesmo!");
else alert("Você errou, o correto são 4 anos-luz");