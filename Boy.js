class Boy{
    constructor(){
        this.image=loadImage("Plucking mangoes/boy.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image, 150, 510, 150, 200);
    }
}