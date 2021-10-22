var RocketImg,rocket;
var climberImg, climber, climbersGroup;
var spaceImg, spaceImg;
var gameState = "play"

function preload() {
  RocketImg = loadImage("rocket.png")
  spaceImg = loadImage("space.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  space = createSprite(300, 300);
  space.addImage("space", spaceImg);
  space.velocityY = 1;
  climbersGroup = new Group();
  rocket = createSprite(200, 200, 50, 50);
  rocket.scale = 0.3;
  rocket.addImage("rocket", rocketImg);

}

function draw() {
  background(200);
  if (gameState === "play") {
    if (keyDown("left_arrow")) {
      ghost.x = ghost.x - 3;
    }
    if (keyDown("right_arrow")) {
      ghost.x = ghost.x + 3;
    }
    if (keyDown("space")) {
      ghost.velocityY = -10
      
    }
    rocket.velocityY = rocket.velocityY+0.8;

  spawnDoors();
  if (climbersGroup.isTouching(ghost)) {
    ghost.velocityY = 0;
    
  }

  drawSprites();
}


if (gameState === "end") {
  stroke("yellow");
  fill("yellow");
  text("gameOver", 230, 250);
}
    
}
function spawnDoors() {
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200, 10);
    var invisibleBlock = createSprite(200, 15);


    climber.addImage(climberImg); 
    climber.velocityY = 1;
    rocket.depth = space.depth;
    rocket.depth = rocket.depth+1
    climber.lifetime = 800;
    climbersGroup.add(climber);
  }
}