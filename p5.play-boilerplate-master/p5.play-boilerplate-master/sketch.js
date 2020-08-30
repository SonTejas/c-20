var movrect,fixrect;
  
function setup() {

  createCanvas(800,400);
 movrect = createSprite(400, 200, 50, 50);
 fixrect = createSprite (300,300,100,50)
movrect.shapeColor="green"
fixrect.shapeColor="green"


}



function draw() {
  background(0);  
  if (movrect.x-fixrect.x<=movrect.width/2+fixrect.width/2 && 
    fixrect.x-movrect.x<=movrect.width/2+fixrect.width/2 && movrect.y-fixrect.y<=movrect.height/2+fixrect.height/2 && 
    fixrect.y-movrect.y<=movrect.height/2+fixrect.height/2){
    movrect.shapeColor="red";
fixrect.shapeColor="red";
  }
  else{
    movrect.shapeColor="green";
    fixrect.shapeColor="green";
  }

  movrect.x= mouseX;
  movrect.y= mouseY;

  drawSprites();
}