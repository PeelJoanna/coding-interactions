//Make a circle that shudders with terror every time you point the mouse at it. Use
//dist().

var x;
var y;

function setup(){
  createCanvas(400,400);
  x = random (width/2, width/2);
  y = height/2;
  ellipseMode(CENTER);
  ellipse (x,y,100,100);
}

function draw (){
  background (0);
  
  if (dist(x,y,mouseX,mouseY)<50) {
    x = random (width/2 - 5, width/2+5);
  }
  ellipseMode(CENTER);
  ellipse (x,y,100,100);
}
