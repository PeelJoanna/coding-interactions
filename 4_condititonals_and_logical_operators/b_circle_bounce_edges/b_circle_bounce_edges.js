//Make a ball bounce around the screen, changing direction when it hits the edges.

var x = 200;
var y = 200;

var xspeed = 3;
var yspeed = 1.8;

function setup() {
  createCanvas(400,400);
}

function draw () {
  background(255);
  fill(0);
  ellipse(x,y,30,30);
  
  if (x > width || x<0){
    xspeed = xspeed * -1;
  }
  
  if (y > height || y<0){
    yspeed = yspeed * -1;
  }
 
  x = x + xspeed;
  y = y + yspeed;
}
