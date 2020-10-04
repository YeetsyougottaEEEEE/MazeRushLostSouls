var Player;
var gamestate=1;
var wall, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wal16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25;
var v1, v2, v3, v4, v5;

function setup() {
  createCanvas(displayWidth-50, displayHeight-200);
  //Player=createSprite(200,200,25,25);
  //entrance walls
  wall=createSprite((displayWidth-50)/2,20,displayWidth-80,10);
  wall2=createSprite(20,(displayHeight-200)/2,10,displayHeight-250);
  wall3=createSprite(120,538,200,10);
  //aaaaaaaa
  wall4=createSprite(220,493,10,100);
  wall5=createSprite(390,449,200,10);
  wall6=createSprite(485,493,10,80);
  wall7=createSprite(600,529,150,10);
  //exit walls
  wall8=createSprite(1296,(displayHeight-200)/4,10,250);
  wall9=createSprite(1296,450,10,200);
  // inner walls
  wall10=createSprite(100,200,10,200);
  wall11=createSprite(200,250,10,200);
  wall12=createSprite(200,350,100,10);
  wall13=createSprite(350,250,200,10);
  wall14=createSprite(500,250,10,200);
  wall15=createSprite(500,150,200,10);
  wall16=createSprite(800,150,10,150);
  wall17=createSprite(650,350,10,150);
  wall18=createSprite(650,280,80,10);
  wall19=createSprite(800,420,300,10);
  wall20=createSprite(1000,260,10,200);
  wall21=createSprite(1150,200,200,10);
  wall22=createSprite(1150,350,10,200);


 /* if(gamestate===1)
  {
  v1=createSprite(500,500,30,30);
  v1.shapeColor="red"
  v1.velocityX=random(-8,+8)
  } */
}

function draw() {
  background("black");
  
  drawSprites();
}


