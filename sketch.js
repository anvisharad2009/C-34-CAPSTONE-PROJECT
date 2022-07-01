const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myEngine , myWorld
var wall1 , wall2 , wall3
var button , blower
var balloon ;

function preload()
{

}


function setup ()
{
    createCanvas(700 , 500) 
    myEngine = Engine.create();
    myWorld = myEngine.world

    wall1=new Wall (10 , 200 , 20 ,600);
    wall2=new Wall(690  , 100  , 20  , 800)
    wall3=new Wall(350 , 490 , 700 , 20)

    blower = createImg("balloon.png");
    blower.position(10 , 80)
    blower.size(180 , 120)
    blower.mouseClicked(airBlow)

    balloon = loadImage("Balloon2.png")
    


    rectMode(CENTER);  
    ellipseMode(RADIUS);
}



function draw ()
{
    background(51)

Engine.update(myEngine);

wall1.display()
wall2.display()
wall3.display()
}

function airBlow() {
    Matter.Body.applyForce(blower , {x:0 , y:0 } , {x:0 , y:-1})
}


function spawnBalloons() {
    if (frameCount % 60 === 0) {
        var balloon = createSprite(200 , 100 , 50);
        balloon.velocityY = -5 ;
    }
}