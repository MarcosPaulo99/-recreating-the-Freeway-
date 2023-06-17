// imagens e sons do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro ;
let imagemCarro2;
let imagemCarro3;
//sons
let somDaTrilha;
let somDaColisão;
let somDoPonto;


function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png")
  imagemDoAtor = loadImage("imagens/ator-.png")
  imagemCarro = loadImage("imagens/carro-1.png")
  imagemCarro2 = loadImage("imagens/carro-2.png")
  imagemCarro3 = loadImage("imagens/carro-3.png")
  imagensCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  
  somDaTrilha = loadSound("sons/trilha.mp3")
  somDaColisão = loadSound("sons/colidiu.mp3")
  somDoPonto = loadSound("sons/pontos.wav")
}