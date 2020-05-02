var fr,mr;
var fr1,fr2;
function setup() {
  createCanvas(800,400);
fr = createSprite(200, 200, 50, 50);
mr = createSprite(200, 200, 50, 50);
fr.shapeColor = "blue";
mr.shapeColor = "red";
fr1 = createSprite(400, 200, 50, 50);
fr1.shapeColor = "yellow";
fr2 = createSprite(600, 200, 50, 50);
fr2.shapeColor = "white";
fr1.velocityX = 1;
fr2.velocityX = -1;



}





function draw() {
  background(0);  
mr.x = mouseX;
mr.y = mouseY;
if (isTouching(fr1,mr)){
  fr1.shapeColor = "green";
  mr.shapeColor = "green";
}else {
  fr1.shapeColor = "blue";
  mr.shapeColor = "red";
  
}
bounceOff(fr1,fr2);
  drawSprites();



}

