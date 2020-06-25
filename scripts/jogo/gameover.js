class GameOver {
    constructor(imagem){
        this.imagem = imagem;
        this.x = width / 2 - 206;
    }
    exibe(){
        image(this.imagem, this.x, height / 2 - 39, 412, 78);
    }
}