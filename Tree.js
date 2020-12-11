class Tree{
    constructor(){
        this.image=loadImage("Plucking mangoes/tree.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image, 850, 300, 500, 600);
    }
}