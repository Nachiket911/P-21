var bullet, wall, speed, weight, deformation,thickness,damage;

function setup() {
  createCanvas(1600,400);

  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));

  bullet = createSprite(300, 200, 50, 20);
  bullet.shapeColor = 255,255,255 ;
   
  wall = createSprite(1200, 200, thickness, height/2);  
  wall.shapeColor = 80,80,80;

  thickness = Math.round(random(22,83));
}

function draw() {
  background(0,0,0); 
   
  bullet.velocityX = speed;

/*  if(bullet.x - wall.x <= bullet.width/2 + wall.width/2){

      wall.shapeColor="red";

    }else{

      wall.shapeColor="blue";

    }*/
  
if(hasCollided(bullet,wall) === true){
    
damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

if(damage < 10){

  wall.shapeColor = "green";
  
  stroke("green");
  textSize("24");
  text("effective", 600, 20);
  
}else if(damage > 10 ){

  wall.shapeColor = "red";
    
  stroke("red");
  textSize("24");
  text("not effective", 600, 20);

} 

}else if(hasCollided(bullet,wall) === false) {

  wall.shapeColor = rgb(0,0,255);  

}

  drawSprites();
  
}

function hasCollided(bullet,wall){

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  
  if(bulletRightEdge>=wallLeftEdge){
  
    return true;

  }
  
  return false;

}
