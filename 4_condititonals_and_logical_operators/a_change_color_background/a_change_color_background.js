//Set the screen to white and divide it into 4 quadrants with black lines. Turn the
//quadrant that the mouse is in red in a rollover fashion

var r = 150;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400,400);
}

function draw(){
   stroke(0);
   
 //top let square
  if(mouseX<width/2 && mouseY<height/2){
    fill(255,0,0);
  } else {
    fill(255);
  }
  rect(0,0,width/2,height/2);
  
  //bottom right square
  if(mouseX>width/2 && mouseY>height/2){
    fill (255,0,0);
  } else {
    fill(255);
  }
  rect(width/2,height/2, width, height);
 
  // top right square
  if(mouseX>width/2 && mouseY<height/2){
    fill (255,0,0);
  } else {
    fill(255);
  }
  rect(width/2,0, width/2, height/2);
  
  // bottom left square
 if(mouseX<width/2 && mouseY>height/2){
    fill (255,0,0);
  } else {
    fill(255);
  }
  rect(0,height/2, width/2, height/2);
}
