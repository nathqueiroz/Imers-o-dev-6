function adicionarFilmesSeries(){
  var adicionarFavoritos = document.getElementById('filme').value
  if (listaFilmes.includes(adicionarFavoritos))
  { alert('Este filme já existe!')}
  else {
  var elementoListaFilmes =
  document.getElementById('listaFilmesSeries')
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src='+ adicionarFavoritos + '>'
   
  } 
}

var listaTrailers = [
  'https://www.youtube.com/watch?v=oKT1dez0k64',
  'https://www.youtube.com/watch?v=keYAQCUvWLo',
  'https://www.youtube.com/watch?v=_Z3QKkl1WyM',
  'https://www.youtube.com/watch?v=wx3PVtrU-Os',
  'https://www.youtube.com/watch?v=_OycxIq1pHQ',
  'https://www.youtube.com/watch?v=cRb5iel-3Ck'
]

var listaFilmes = [
  'https://fotos.web.sapo.io/i/G6917ccd5/21340281_fE8Zi.jpeg',
 'https://br.web.img2.acsta.net/pictures/19/10/21/09/08/1111110.jpg',
  'https://lumiere-a.akamaihd.net/v1/images/blackpanther-wakandaforever_payoff_1-sht_v10_lg_08b81a2d.jpeg',
  'https://br.web.img3.acsta.net/pictures/16/12/21/20/45/071675.jpg',
  'https://img.elo7.com.br/product/main/3A237B6/poster-adesivo-jornada-nas-estrelas-serie-42-5x60cm-adesivo.jpg',
  'https://br.web.img2.acsta.net/pictures/15/12/03/12/33/351670.jpg'
  ];

var nomesListaFilmes = ['Boneca Russa', 'Dollface', 'Wakanda Forever', 'Estrelas Além do Tempo', 'Jornada nas Estrelas', 'Code Girl'];

var i=0 
listaFilmes.length

while (i < listaFilmes.length) { 
  if(listaFilmes[i].endsWith('png')) {
  alert('Ops, insira uma imagem no formato jpg!');
}
  
  else {document.write('<div class="filmes">');
        document.write('<a href='+ listaTrailers[i] +  'target="_blank" > <img src=' + listaFilmes[i] + '> </a>');
        document.write('<h3 style="color: #FFFFFF">' + nomesListaFilmes[i] + '</h3>');
        document.write('</div>');
  }
  i++
}