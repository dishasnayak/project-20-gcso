//DESIGN OF ALGORITHM
//variables 
var car,wall
var speed,wight

//preload

//setup
function setup() {
  createCanvas(1000,400);
  wall = createSprite(900,200,60,height/2)
  car = createSprite(50,200,50,50)

  speed=rendom(55,90)
  weight=random(400,1500)
  
  
  edges=createEdgeSprites();
  
  wall.shapeColor = "blue"
  car.shapeColor ="orange"

  wall.debug = true
  car.debug = true
  car.velocity = speed;
}

//draw
function draw() {
  background(5); 
 if(wall.x-car.x<())

  drawSprites();
}