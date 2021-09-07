const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg

function preload() {
  backgroundImg=loadImage("assets/background.gif")
  towerImg=loadImage("assets/tower.png")
  cannonBase=loadImage("assets/cannon_base.png")
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

 var options={
     isStatic:true
 }
 ground=Bodies.rectangle(600,550,1200,100, options)
 World.add(world,ground)


 var options_t={
     isStatic:true
 }
 tower=Bodies.rectangle(120,350,100,300,options_t)
 World.add(world,tower)

 angleMode(DEGREES)
 cannon= new Cannon(170,150, 50)
 
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine)
  rectMode(CENTER)
  
  cannon.display()
  console.log(cannon.angle)
  
  fill("brown")
  rect(ground.position.x,ground.position.x,1200,100)

  fill("pink") 
  push()
  imageMode(CENTER) 
  rect(tower.position.x,tower.position.y,100,300)
  image(cannonBase,130,140,220,170)
  image(towerImg, 120,350, 140,320)  
  pop()
  
}
