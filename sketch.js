const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;

var g1,g2;
var g1b,g2b;
var bullet;
var ground,groundb;
var engine,world
var slingshot;
// floor 1
var b1,b2,b3,b4,b5,b6;
// floor 2
var f1,f2,f3,f4,f5,f6;
var bullet;
var options={'restitution':1,'friction':1,'density':5,'isStatic':true}
var score=0

function preload() {
   bulletimg=loadImage("polygon.png")
}

function setup(){
   var canvas = createCanvas(1100,400);
      engine = Engine.create();
      world = engine.world;


g1=createSprite(500,250,220,20);
g1b=Bodies.rectangle(500,250,200,20,options)

World.add(world,g1b);

g2=createSprite(900,200,220,20);
g2b=Bodies.rectangle(900,200,200,20,options);

World.add(world,g2b);

ground=createSprite(600,400,1200,10)
groundb=Bodies.rectangle(600,400,1200,10,options)

World.add(world,groundb);

bullet = new Bullet(100,300,20,20)

sling = new SlingShot(bullet.body,{x:110,y:290})

//floor 1 level 1
b1 = new Block(420,206)
b2 = new Block(470,206)
b3 = new Block(520,206)

//floor 1 level 2
b4 = new Block(445,162)
b5 = new Block(495,162)

//floor 1 level 3
b6 = new Block(470,116)

//floor 2 level 1
f1 = new Block(820,190)
f2 = new Block(870,190)
f3 = new Block(920,190)

//floor 2 level 2
f4 = new Block(845,144)
f5 = new Block(895,144)

//floor 2 level 3
f6 = new Block(870,98)





   
}

function draw(){

  background(0);
    
    Engine.update(engine);

    

    sling.display();
  

    b1.display();
    b2.display();
    b3.display();

    b4.display();
    b5.display();

    b6.display();

    f1.display();
    f2.display();
    f3.display();

    f4.display();
    f5.display();

    f6.display();
    

    bullet.display();
    
    
    b1.score();
    b2.score();
    b3.score();

    b4.score();
    b5.score();

    b6.score();

    f1.score();
    f2.score();
    f3.score();

    f4.score();
    f5.score();

    f6.score();

    

    drawSprites();

    fill("white")
    text("Your Score is : " + score , 100,50)
      
}

function mouseDragged(){
  Matter.Body.setPosition(bullet.body,{x:mouseX,y:mouseY})
  }
  
  function mouseReleased(){
      sling.fly();
  }

  function keyPressed(){
     if(keyCode==32){
     sling.attach(bullet.body);
     }
  }

  

