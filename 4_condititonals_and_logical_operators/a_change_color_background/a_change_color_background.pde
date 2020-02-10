//Set the screen to white and divide it into 4 quadrants with black lines. Turn the
//quadrant that the mouse is in red in a rollover fashion

float r = 150;
float g = 0;
float b = 0;

void setup() {
  size(400,400);
}


void draw(){
   stroke(255);
   
 //top let square
  if(mouseX<width/2 && mouseY<height/2){
    fill (255,0,0);
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

//  horizontal();
  //vertical();
  //divide in 4 squares
  
  //make 2 lines
}

void horizontal() {
  //background(r,g,b);
  stroke(255);
  line(0,height/2,width,height/2);
//  if(mouseY > height/2) {
//    r = r + 1;
//  } else {
//    r = r - 1;
//  }
//  if (r > 255) {
//    r = 255;
//  } else if (r < 0) {
//    r = 0;
//  }
}

void vertical() {
  stroke(255);
  line(width/2,0,width/2,height);
  //if(mouseX > width/2) {
  //  r = r + 1;
  //} else {
  //  r = r - 1;
  //}
  //if (r > 255) {
  //  r = 255;
  //} else if (r < 0) {
  //  r = 0;
  //}
}
