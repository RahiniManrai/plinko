var starImg,bgImg;
var star, starBody;
var fairy, fairyImg
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg=loadAnimation("fairy.png, fairyImage1.png, fairyImage2.png")
}
var particles=[]
var plinko=[]
var wall=[]
function setup() {
	createCanvas(800, 750);

	fairyVoice.playSound("JoyMusic.mp3")

	fairy=createSprite(300, 150)
	fairy.addAnimation(fairy.png, fairyImage1.png, fairyImage2.png)

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	particle=new Particle(400, 750, 2)
	particle1=new Particle(401, 750, 2)
	particle2=new Particle(402, 750, 2)
	particle3=new Particle(403, 750, 2)
	particle4=new Particle(399, 750, 2)
	particle5=new Particle(398, 750, 2)
	particle6=new Particle(397, 750, 2)
	particle7=new Particle(400, 750, 2)
	particle8=new Particle(405, 750, 2)
	particle9=new Particle(408, 750, 2)
	particle10=new Particle(396, 750, 2)
	particle11=new Particle(403, 750, 2)
	particle12=new Particle(401, 750, 2)
	particle13=new Particle(402, 750, 2)
	particle14=new Particle(404, 750, 2)
    particle15=new Particle(398, 750, 2)

	wall1=new Wall(100, )
	wall2=new Wall()
	wall3=new Wall()
	wall4=new Wall()
	wall5=new Wall()
	wall6=new Wall()
	wall7=new Wall()
	wall8=new Wall()
	wall9=new Wall()
	wall10=new Wall()


	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  
  //*if(star.x=300&&star.y=150){
   // star.velocityX=0;
	//star.velocityY=0
  //}



  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === LEFT_ARROW) {
		Matter.Body.setStatic(starBody,false); 
		fairy.velocityX=-3;
	}
    

	if (keyCode === RIGHT_ARROW) {
		Matter.Body.setStatic(starBody,false); 
		fairy.velocityX=3
	}

	
}
