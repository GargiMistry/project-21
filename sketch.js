var box1, box2;

function setup(){
  createCanvas(600,600);

  box1 = createSprite(300,300,100,50);
  box1.shapeColor = "crimson";

  box2 = createSprite(100,100,50,100);
  box2.shapeColor = "blue";

}



function draw(){
  background(0);

  box2.x = World.mouseX;
  box2.y = World.mouseY;

 if(click(box1,box2)){
   box1.x=random(100,500);
   box1.y=random(100,500);
 }

  drawSprites();

}