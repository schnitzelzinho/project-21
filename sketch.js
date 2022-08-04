var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground =new Ground(400,690,800,40);
	leftSide =new Ground(500,670,10,150);
	rightSide =new Ground(650,670,10,150);

	var ball_options = {
		isStatic:false,
		restitution:0.95,
		friction:0,
		density:1.2
	}
	fill("white");
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	//Create the Bodies Here.
	//ball = Bodies.circle(200,100,20,ball_options);
	//World.add(world,ball);

	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ground.show();
  leftSide.show();
  rightSide.show();
  ellipse(ball.position.x,ball.position.y,40);
}

function keyPressed() {
	console.log("JUMP");
	if (keyCode === UP_ARROW) {
	console.log("Ok");
		Matter.Body.applyForce(ball,{
			x:0,
			y:0
		  },{
			x:25,
			y:-25
		  });
	}
}