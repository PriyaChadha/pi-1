const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg
var boats = [];

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
  showBoats();
  cannon.display()
  //console.log(cannon.angle)
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

function showBoats() {
  if (boats.length > 0) {
    if (
      boats[boats.length - 1] === undefined ||
      boats[boats.length - 1].body.position.x < width - 300
    ) {
     
      var boat = new Boat(width, 300, 170, 170);

      boats.push(boat);
    }

    for (var i = 0; i < boats.length; i++) {
      if (boats[i]) {
        Matter.Body.setVelocity(boats[i].body, {
          x: -0.9,
          y: 0
        });

        boats[i].display();
      } else {
        boats[i];
      }
    }
  } else {
    var boat = new Boat(width, 300, 170, 170, -60);
    boats.push(boat);
  }
}
