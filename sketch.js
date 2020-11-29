
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustBin1, dustBin2, dustBin3;
var paper;
var myengine, myworld;
var dustBin1Sprite;
var dustBin1Body;
var paperBody;
var paperSprite;
let movers = [];

function preload()
{

}

function setup() {
	createCanvas(800, 700);
  
	engine = Engine.create();
  world = engine.world;
	 dustBin1 = new DustBin(600,650,200,10);
	dustBin2 = new DustBin(700,600,10,100);
	dustBin3 = new DustBin(500,600,10,100);
	ground = new Ground(400,680,800,20);
  paper = new Paper(85,605,50);
  paperBody = Bodies.circle(width/3 , 100 , 5 , {restitution:0.7, isStatic:true});
  World.add(world, paperBody);

 paperBody = createSprite(115,605,60,60);
  paperBody.scale=0.7;

	//Create the Bodies Here.
  var paper_options = {
    isStatic:false
  }
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0); 
  drawSprites();
  dustBin1.display();
  dustBin2.display();
  dustBin3.display();
  ground.display();
  paper.display();
  paper.x= paperBody.position.x;
  paper.y= paperBody.position.y;
  PressUpArrow();
}

function PressUpArrow () {

  if (keyCode === UP_ARROW) {
   circle(600,600,50);
   paperBody.scale=0.4;
  Matter.Body.applyForce (paperBody.body, paperBody.position,{x: 85,y: -85});

 // Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 0.05, y: 0});

 paperBody.force.x += 85;
 paperBody.force.y += -85;
  // Matter.Body.applyForce (paperBody,paperBody.position,{x:85,y:-125});
   }
  }
