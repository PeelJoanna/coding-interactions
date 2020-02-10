//Make a circle that flees to a random location every time you point the mouse at it.
//Use dist().

var circleX = 0;
var circleY = 0;
var circleSize = 100;
var overBox = false;
var overCircle = false;
var destinationX = -1;
var destinationY = -1;
 
function setup()
{
  createCanvas(800, 800);
  circleX = width/2;
  circleY = height/2;
}

// add or remove _step_ from circleX to make it closer to destinationX
function nextPosition(var circleX, var destinationX, var step) {
    if (circleX - step > destinationX) {
      circleX = circleX - step;
    } else if (circleX + step < destinationX) {
      circleX = circleX + step;
    }
    return circleX;
}

function draw()
{
  background(0);

  // Test if the cursor is over the circle
  if (dist(mouseX, mouseY, circleX, circleY) < circleSize) {
    var radius = circleSize / 2;
    destinationX = random(radius, width - radius);
    destinationY = random(radius, height - radius);
  }
 
  // prevent the circle to move when mouse did not enter screen yet
  if (destinationX != -1 && destinationY != -1) {
    // assign new position X nearest from destination by 1
    circleX = nextPosition(circleX, destinationX, 1);
    // assign new position Y nearest from destination by 1
    circleY = nextPosition(circleY, destinationY, 1);
  }
 
  stroke(255);
  fill(255,0,0);
  ellipse(circleX,circleY,circleSize,circleSize);
}
