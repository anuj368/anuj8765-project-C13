var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;
var grass,grassImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
grassImg=loadImage("grass.png");
}



function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

grass=createSprite(200,250);
grass.scale=0.25;
grass.addImage(grassImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale=0.10;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  



  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();

  var select_sprites = Math.round(random(2,5));
  
  if (frameCount % 100 == 2) {
    if (select_sprites == 3) {
      createApples();
    } else if (select_sprites == 4) {
      createOrange();
    }else if (select_sprites == 5) {
      createRed();
  }


}
}


function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.06;
apple.velocityY = 4;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3.5;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 4.5;
  redL.lifetime = 150;
}
