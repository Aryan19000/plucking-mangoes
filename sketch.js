
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render

var engine, ground, tree, boy, stone;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
//var gameState="onSling";

function setup() {
	createCanvas(1100, 550);
	engine=Engine.create();
	world=engine.world;
	ground=Bodies.rectangle(550, 575, 11000, 10, {isStatic:true});
	World.add(world, ground);
	tree=new Tree();
	boy=new Boy();
    stone=new Stone(150, 250, 45);
    
	mango1=new Mango(900, 50, 40);
	mango2=new Mango(800, 100, 42);
	mango3=new Mango(1025, 225, 43);
	mango4=new Mango(950, 150, 41);
	mango5=new Mango(775, 250, 45);
	mango6=new Mango(700, 200, 45);
	mango7=new Mango(862.5, 212.5, 40);

    sling=new SlingShot(stone.body, {x: 100, y:460});
    
    /*var render=Render.create({
        element:document.body,
        engine:engine,
        options:{
            width:1300,
            height:600,
            wireframes:false
        }
    })
    Render.run(render);*/
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("lightblue");
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  sling.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
}

function mouseDragged(){
    //if(gameState==="onSling"){
        Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}); 
    //}
}

function mouseReleased(){
    sling.fly();
    //gameState="launched";
}

function keyPressed(){
    if(keyCode===32){
        sling.attach(stone.body);
        //gameState="onSling";
        stone.body.x=100;
        stone.body.y=450;
    }
}

function detectCollision(rock, mango){
    rockPosition=rock.body.position;
    mangoPosition=mango.body.position;

    var distance=dist(rockPosition.x, rockPosition.y, mangoPosition.x, mangoPosition.y);
    if(distance<=mango.r+rock.width){
        Matter.Body.setStatic(mango.body, false);
    }
}

