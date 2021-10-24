var characterOne;
var bg;
var characterImg;
var bgImg;
var snowflake;
var snowflakeImg;


function preload(){
  characterImg = loadImage("snowBoy.png");
  bgImg = loadImage("snow1.jpg");
  snowflakeImg = loadImage("snowflake.png");
}

function setup() {
  createCanvas(800,400);
  characterOne = createSprite(200, 100, 50, 50);
  characterOne.addImage(characterImg);
  characterOne.scale = 0.3;

  
}



function draw() {
  background(bgImg);  
 
  var sprites = Math.round(random(1,2));

  if (frameCount % 40 == 0){
    {

    }
      if(sprites == 1){
        createSnow();
      }
  }

  if(keyCode === 32){
    characterOne.x = 400;
    characterOne.y =  200;
  }
  textSize(15);
  text("Press space to jump off the tree",550,50);

  drawSprites();
  
}

function createSnow(){
  if(frameCount % 5 === 0){
  snowflake = createSprite(random (100,750),40, 20,20);
  snowflake.addImage(snowflakeImg);
  snowflake.velocityY = 3;
  snowflake.y = Math.round(random(1,2));
  snowflake.scale = 0.3;
  snowflake.lifetime = 150;

  }
}
