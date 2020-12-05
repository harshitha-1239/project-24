
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var object;
var paper;

function setup() {
  createCanvas(1600, 700);
  
  
 
	engine = Engine.create();
	world = engine.world;


  
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  World.add(world, ground);

  paper=new Paper(200,450,40)

	object=new dustbin(1200,650)
  
 

	




	
  var render = Render.create({ element: document.body,
     engine: engine,
      options: { width: 1200, height: 700, wireframes: false } });
   Engine.run(engine);
}


function draw() {
  
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(width/2,650,width,10)
  paper.display()
  object.display()


  
  
 
}

function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});




}

}






