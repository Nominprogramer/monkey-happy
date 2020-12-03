
var monkey , monkey_running , back , backf , ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

  back = loadImage("opness.png");
 
}



function setup() {
  createCanvas(800,400);
  backf = createSprite(400,200,800,400);
  backf.addImage("back", back);
  ground = createSprite(400,370,1200,10);
  monkey = createSprite(700,355,30,30);
  monkey.addAnimation("run",monkey_running);
  monkey.scale = 0.1;
}


function draw(){
  background("white"); 

  backf.velocityX = -3;
  monkey.velocityX = 3;

  if(backf.x < 200){
    backf.x = 400;
  }

  if(monkey.x > 400){
    monkey.x = 50;
  }

  if(keyDown("space") && monkey.y < 100){
    monkey.velocityY = -12;
  }

  ground.x = backf.x;
  monkey.collide(ground);

  monkey.velocityY += 0.8;


  food();
  Obstacle();

  drawSprites();
}


function food () {
  if(frameCount % 60 === 0){
    banana = createSprite(Math.round(random(200,700)),100,20,15);
    banana.addImage("banana",bananaImage);

    banana.lifetime = 60;
    banana.scale = 0.1;
  }
}

function Obstacle(){
  if(frameCount % 120 === 0){
    obstacle = createSprite(Math.round(random(400,700)),370,20,15);
    obstacle.addImage("obstacleI",obstacleImage);

    obstacle.lifetime = 120;
    obstacle.scale = 0.3;
  }
}