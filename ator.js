//código ator
let xAtor = 90;
let yAtor = 366;
let larguraAtor = 30;
let alturaAtor = 30;
let verificaColisão = false;
let meusPontos = 0;
function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor,larguraAtor, alturaAtor)
}
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover())
    yAtor += 3;
}
}
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagensCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosiçãoInicial()
      somDaColisão.play();
      if (pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}
function voltaAtorParaPosiçãoInicial(){
  yAtor = 366;
}
function incluiPontos(){
  text (meusPontos,width/ 5, 27) 
  textSize(25);
  textAlign(CENTER);
  fill(color(218,240,60))
}
function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
   voltaAtorParaPosiçãoInicial();
    somDoPonto.play();
  } 
}
function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}



