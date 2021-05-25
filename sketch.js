const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var world,engine;
var ground,box1,box2,box3,box4,box5,box6,box7,box8,ball,rope;

function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;
  ground = new Ground(600,600,1200,20);
  box1 = new Box(700,100,70,70);
  box2 = new Box(700,170,70,70);
  box3 = new Box(630,100,70,70);
  box4 = new Box(630,170,70,70);
  ball = new Ball(200,200,40);
  rope = new Rope(ball.body,{x:450,y:100})
}

function draw() {
  background("black"); 
 Engine.update(engine)
 ground.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 ball.display();
 rope.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  rope.fly();
}