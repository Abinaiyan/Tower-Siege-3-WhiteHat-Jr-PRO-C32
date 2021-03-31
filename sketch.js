const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var number
var ground
var platform1
var platform2
var block1
var block2
var block3
var block4
var block5
var block6
var block7
var block8
var block9
var block10
var block11
var block12
var block13
var block14
var block15
var block16

var catapult
var polygon
var Score = 0



function preload()
{
	
}

function setup() {
	createCanvas(1700, 600);


	engine = Engine.create();
	world = engine.world;

  number = 1

	//Create the Bodies Here.
  ground = new Ground(850, 580, 1700, 20)
  platform1 = new Ground(850, 450, 350, 10)
  platform2 = new Ground(1350, 350, 300, 10)

  // level 1
  block1 = new Block(945,423)
  block2 = new Block(915,423)
  block3 = new Block(885,423)
  block4 = new Block(855,423)
  block5 = new Block(825,423)
  block6 = new Block(795,423)
  block7 = new Block(765,423)

  //level 2 

  block8 = new Block(915,403)
  block9 = new Block(885,403)
  block10 = new Block(855,403)
  block11 = new Block(825,403)
  block12 = new Block(795,403)

  // level 3 

  block13 = new Block(885,383)
  block14 = new Block(855,383)
  block15 = new Block(825,383)

  // level 4 

  block16 = new Block(855,353)

  // level 1 
  block17 = new Block(1405,323)
  block18 = new Block(1375,323)
  block19 = new Block(1345,323)
  block20 = new Block(1315,323)
  block21 = new Block(1285,323)

  block22 = new Block(1375,303)
  block23 = new Block(1345,303)
  block24 = new Block(1315,303)

  // level 3 
  block25 = new Block(1345,283)

  
  polygon = new Polygon(300,400)
  catapult = new Slingshot(polygon.body,{x:300, y:400})

  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(number);
  console.log(Score)
  console.log(number)


  stroke(0,250,255)
  fill(0,250,255)
  textSize(24)
  text("Score : "+ Score,750,40 )

  stroke(0);

  ground.display()
  platform1.display()
  platform2.display()

  // level 1

  block1.display_blue()
  block2.display_blue()
  block3.display_blue()
  block4.display_blue()
  block5.display_blue()
  block6.display_blue()
  block7.display_blue()
 
  // level 2
  block8.display_pink()
  block9.display_pink()
  block10.display_pink()
  block11.display_pink()
  block12.display_pink()

  // level 3
  block13.display_turquoise()
  block14.display_turquoise()
  block15.display_turquoise()

 // level 4 
  block16.display_grey()


// level 1 
  block17.display_blue()
  block18.display_blue()
  block19.display_blue()
  block20.display_blue()
  block21.display_blue()

  // level 2 
  block22.display_turquoise()
  block23.display_turquoise()
  block24.display_turquoise()

  // level 3
  block25.display_pink()

  polygon.display()
  stroke(0,255,255);
  catapult.display()

  block1.score()
  block2.score() 
  block3.score()
  block4.score()
  block5.score()

  block6.score()
  block7.score() 
  block8.score()
  block9.score()
  block10.score()

  block11.score()
  block12.score() 
  block13.score()
  block14.score()
  block15.score()

  block16.score()
  block17.score() 
  block18.score()
  block19.score()
  block20.score()

  block21.score()
  block22.score() 
  block23.score()
  block24.score()
  block25.score()

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}



function mouseReleased(){
  catapult.fly();
}



function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(polygon.body, {x: 300, y:400})
     catapult.attach(polygon.body);
  }
}

async function getBackgroundColour(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Pacific/Chatham")
  var responsejson = await response.json()
  var datetime = responsejson.datetime
  var hour = datetime.slice(11,13)
  console.log(hour)

  if( hour >= 06 && hour <= 19){
  number = 255
  }
 else{
  number = 0
 }
}