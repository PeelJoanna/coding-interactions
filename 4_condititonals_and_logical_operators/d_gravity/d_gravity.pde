//Make a small square appear on the screen and drop towards the bottom. When it hits
//the bottom, have it bounce, but with gravity affecting it, such that each time it
//bounces, it bounces less high.

float x = 200;
float y = 0;
float yspeed = 5;
float p= 200;

void setup() {
  size(400,400);
  frameRate(30);
}

void mySquare(float y) {
  stroke(0);
  strokeWeight(4); 
  fill(255);
  rectMode(CENTER);
  rect(x,y,20,20);
}

void draw() {
  background(255, 204, 0);
  
  mySquare(y);

  if (y == height - 20) {
    yspeed = yspeed * -1;
  }
  
  if (y<p && yspeed<0) {
  yspeed = yspeed * -1;
  p=p+p/2;
  }
  
  if (p>= height && y>= height-20){
    y=height-20;
  }
  
  y = y + yspeed;

}
