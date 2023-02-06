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
        document.write('<img src=' + listaFilmes[i] + '>');
        document.write('<h3 style="color: #FFFFFF">' + nomesListaFilmes[i] + '</h3>');
        document.write('</div>');
  }
  i++
}