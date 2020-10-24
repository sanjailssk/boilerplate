var fixedrectangle,movingrectangle;


function setup() {
  createCanvas(800,400);
  fixedrectangle = createSprite(400, 200, 50, 50);
  fixedrectangle.shapeColor = "green";
  movingrectangle = createSprite(200,200,70,80);
  movingrectangle.shapeColor = "green";
}

function draw() {
  background("blue");  

  movingrectangle.x = World.mouseX;
  movingrectangle.y = World.mouseY;

  if(movingrectangle.x - fixedrectangle.x < fixedrectangle.width/2 + movingrectangle.width/2){
    fixedrectangle.shapeColor = "red";
    movingrectangle.shapeColor = "red";
  }
 else{
  fixedrectangle.shapeColor = "green";
  movingrectangle.shapeColor = "green";
 }
  drawSprites();
}