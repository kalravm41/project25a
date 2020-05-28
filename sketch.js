
var roof,bobobject1,bobobject2,bobobject3,bobobject4,bobobject5,rope1,rope2,rope3,rope4,rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobobject1 = new Bob(200,500,40);
	bobobject2 = new Bob(240,500,40);
	bobobject3 = new Bob(280,500,40);
	bobobject4 = new Bob(320,500,40);
	bobobject5 = new Bob(360,500,40);
	roof = new Roof(280,300,230,20);
	rope1 = new Rope(bobobject1.body,roof.body,-80,0);
	rope2 = new Rope(bobobject2.body,roof.body,-40,0);
	rope3 = new Rope(bobobject3.body,roof.body,0,0);
	rope4 = new Rope(bobobject4.body,roof.body,40,0);
	rope5 = new Rope(bobobject5.body,roof.body,80,0);
	
	

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  //keypressed();
 // Keypressed();
  console.log(UP_ARROW);
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		//Matter.Body.setStatic(bobobject1, true)
		Matter.Body.setStatic(bobobject1.body,false)
	  	Matter.Body.setStatic(bobobject2.body,false)
	 	Matter.Body.setStatic(bobobject3.body,false)
		Matter.Body.setStatic(bobobject4.body,false)
      	Matter.Body.setStatic(bobobject5.body,false)
		Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-5,y:-5})
 //	Matter.Body.applyForce(bobobject5.body,bobobject5.body.position,{x:5,y:-5})
		
	}
	
	}




//function isTouching(obj1,obj2){
	//if(obj1.x-obj2.x<obj1.width/2+obj2.width/2
//&&     obj2.x-obj1.x<obj1.width/2+obj2.width/2
//&&     obj1.y-obj2.y<obj1.height/2+obj2.height/2
//&&     obj2.y-obj1.y<obj1.height/2+obj2.height/2){
//	return true;
//}
//else{
//	return false;
//}
//}





