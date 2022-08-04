const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var ball;

var btnh,btnv;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  var ballOptions ={
    restitution: 0.95
  }
  ball = Bodies.circle(200,100,20,ballOptions);
  World.add(world,ball);

  btnh = createImg("right.png");
  btnh.position(220,30);
  btnh.size(50,50);

  btnh.mouseClicked(horizontalforceball);

  btnv = createImg("up.png");
  btnv.position(20,30);
  btnv.size(50,50);

  btnv.mouseClicked(verticalforceball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);

}

function horizontalforceball() {
  Matter.Body.applyForce(ball,{
    x:0,
    y:0
  },{
    x:0.05,
    y:0
  });

}

function verticalforceball() {
  Matter.Body.applyForce(ball,{
    x:0,
    y:0
  },{
    x:0,
    y:-0.09
  });

}