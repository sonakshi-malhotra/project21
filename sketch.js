var bullet,speed,weight;
var wall,thickness
function setup() {
  createCanvas(1600,400);
 bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, height/2);
  wallColor=(80,80,80)
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  /*if(wall.x - bullet.x < bullet.width/2+ wall.width/2){
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
     if(damage=3.68){ 
       wall.shapeColor=color(green) 
    
     }else if(damage=12.43){
      wall.shapeColour=color(red) 
    }

        
  } */
  drawSprites();
}
 function hasCollided(bullet,wall){
   bulletRightEdge=bullet.x+bullet.width;
   wallLeftEdge=wall.x;
   if(bulletRightEdge>=wallLeftEdge){
  return true
   }
   return false;
   if(hasCollided(bullet,wall))
   {
     bullet.velocityX=0;
     var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
     if(damage>10)
     {
       wall.shapeColor=color(255,0,0);
     }

     if(damage<10)
     {
       wall.shapeColor=color(0,255,0);
     }
   }
 }
