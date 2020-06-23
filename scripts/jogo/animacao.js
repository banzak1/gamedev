class animacao {
  constructor(
    matriz,
    imagem,
    x,
    y,
    largura,
    altura,
    larguraSprite,
    alturaSprite
  ) {
    this.matriz = matriz;
    this.imagem = imagem;
    this.x = x;
    this.y = height - this.altura;
    this.largura = largura;
    this.altura = altura;
    this.larguraSprite = this.larguraSprite;
    this.alturaSprite = this.alturaSprite;

    this.frameAtual = 0;
  }

  exibe() {
    image(
      this.imagem,
      this.x,
      this.y,
      this.largura,
      this.altura,
      this.matriz[this.frameAtual][0],
      this.matriz[this.frameAtual][1],
      this.larguraSprite,
      this.alturaSprite
    );
  }

  anima() {
    this.frameAtual++;

    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
}
