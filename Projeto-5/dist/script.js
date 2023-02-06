var nathrixy = {
  nome: "nathrixy",
  vitoria: 0,
  fatality: 0,
  pontos: 0,
  derrota: 0
};

var tessy = {
  nome: "tessy",
  vitoria: 0,
  fatality: 0,
  pontos: 0,
  derrota: 0
};

var badu = {
  nome: "badu",
  fatality: 0,
  vitoria: 0,
  pontos: 0,
  derrota: 0
};

var jj = {
  nome: "jj",
  vitoria: 0,
  fatality: 0,
  pontos: 0,
  derrota: 0
};

function adicionarJogador() {
  var nomeJogador = prompt(
    "Insira o nome do novo(a) jogador(a) no campo abaixo:"
  );

  var novoJogador = {
    nome: nomeJogador,
    vitoria: 0,
    fatality: 0,
    pontos: 0,
    derrota: 0
  };
  nomesJogadores.push(novoJogador);
  exibirNaTela();
}

var nomesJogadores = [nathrixy, badu, tessy, jj];

var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function exibirNaTela() {
  var resultado = "";
  for (var i = 0; i < nomesJogadores.length; i++) {
    resultado += `
  <tr>
          <td>${nomesJogadores[i].nome}</td>
          <td>${nomesJogadores[i].vitoria}</td>
          <td>${nomesJogadores[i].fatality}</td>
          <td>${nomesJogadores[i].derrota}</td>
          <td>${nomesJogadores[i].pontos}</td>
          <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
          <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
          <td><button onClick="adicionarFatality(${i})">Fatality</button>
        
     `;
  }
  elementoTabela.innerHTML = resultado;
}

function adicionarVitoria(jogador) {
  nomesJogadores[jogador].vitoria++;
  nomesJogadores[jogador].pontos = nomesJogadores[jogador].pontos + 1;
  exibirNaTela();
  //Adiciona vitórias ao ganhador da partida
}

function adicionarFatality(jogador) {
  nomesJogadores[jogador].fatality++;
  nomesJogadores[jogador].pontos = nomesJogadores[jogador].pontos + 1;
  exibirNaTela();
  //Adiciona um ponto ao jogador quando realiza um Fatality
}

function adicionarDerrota(jogador) {
  nomesJogadores[jogador].derrota++;
  exibirNaTela();
  //Adiciona derrota ao perdedor da partida
}

function zerarPontos(jogador) {
  for (var i in nomesJogadores) {
    nomesJogadores[i].vitoria = 0;
    nomesJogadores[i].fatality = 0;
    nomesJogadores[i].derrota = 0;
    nomesJogadores[i].pontos = 0;
  }
  exibirNaTela();
  //Zera a pontuação de todos os jogadores
}