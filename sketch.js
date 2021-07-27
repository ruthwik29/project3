var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
appleImg=loadImage("apple.png")
leafImg=loadImage("leaf.png")

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  appledisplay()
  rabbit.x=World.mouseX
  leafdisplay()
  drawSprites();
}
function appledisplay(){
  if(frameCount%80==0){
  apple=createSprite(300,5,20,300)
  apple.addImage(appleImg) 
apple.velocityY=3
apple.scale=0.05
apple.x=Math.round(random(10,390))
}
}
function leafdisplay(){
  if(frameCount%70==0){
  leaf=createSprite(100,5,20,300)
  leaf.addImage(leafImg) 
leaf.velocityY=3
leaf.scale=0.05
leaf.x=Math.round(random(10,390))
}
} 


