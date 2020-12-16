
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = new Dustbin(950, 550, 200, 10);

	ground = new Ground(600, 570, 1200, 10);

	ball = new Paper(100, 520, 35);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("LightGrey");

  ball.display();
  ground.display();
  bin1.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x: 250, y: -250})
	}
}





