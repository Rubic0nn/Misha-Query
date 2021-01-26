
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var ballRadius=20;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof=new Roof(330,170,300,20);
	ball=new Balls(240,450,20);
	ball2=new Balls(280,450,20);
	ball3=new Balls(320,450,20);
	ball4=new Balls(360,450,20);
	ball5=new Balls(400,450,20);
	rope1=new Rope(ball.body,roof.body,-ballRadius*5,0)
	rope2=new Rope(ball2.body,roof.body,-ballRadius*2.5,0)
    rope3=new Rope(ball3.body,roof.body,0,0)
	rope4=new Rope(ball4.body,roof.body,ballRadius*2.5,0)
	rope5=new Rope(ball5.body,roof.body,ballRadius*5,0)
}


function draw() {
  rectMode(CENTER);
  background(44);
  Engine.run(engine);

 roof.display();
 ball.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
					Matter.Body.applyForce(ball.body,ball.body.position,{x:-35,y:-135});
	}
}
