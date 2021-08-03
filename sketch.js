var balloon,balloonImage;


function preload(){
   bg =loadImage("cityImage.png");
   balloonImage=loadAnimation("hotairballoon1.png","hotairballoon2.png","hotairballoon3.png");
  }
function setup() {
  createCanvas(1500,700)
  database=firebase.database();
  

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage);
  balloon.scale=0.5; 
}
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage);
    balloon.x = balloon.x-15;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage);
    balloon.x = balloon.x+15;
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage);
    balloon.y = balloon.y-15;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage);
    balloon.y =balloon.y+15;
  }


  drawSprites();
  textSize(45);
  text("Use the arrow keys to move hot air balloon!",70,40);
}

